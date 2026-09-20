/**
 * Enterprise Security & Input Sanitization Shield
 * Defends against SQL Injection (SQLi), Cross-Site Scripting (XSS),
 * Prototype Pollution, and Malicious URL Parameters.
 */

// Common SQL Injection Signatures (Case-insensitive heuristic regex)
const SQLI_PATTERNS = [
  /(\b(union(\s+all)?\s+select)\b)/i,
  /(\b(select\s+.+\s+from)\b)/i,
  /(\b(insert\s+into\s+.+values)\b)/i,
  /(\b(drop\s+(table|database|view|index|procedure|trigger))\b)/i,
  /(\b(alter\s+table)\b)/i,
  /(\b(delete\s+from)\b)/i,
  /(\b(update\s+.+\s+set)\b)/i,
  /(\b(exec(\s+|\s*\().+)\b)/i,
  /(\b(waitfor\s+delay)\b)/i,
  /(\b(benchmark\s*\(.+,.+\))\b)/i,
  /((\%27)|(')|(\-\-)|(\%23)|(#))/i, // Quotes and comment indicators
  /((\bor\b|\band\b)\s+['"]?\d+['"]?\s*=\s*['"]?\d+)/i, // OR 1=1, AND 1=1
  /(;\s*(drop|delete|insert|update|select|alter)\b)/i, // Semicolon chained queries
];

// Common Cross-Site Scripting (XSS) Patterns
const XSS_PATTERNS = [
  /<script\b[^>]*>([\s\S]*?)<\/script>/gi,
  /<script\b/gi,
  /javascript\s*:/gi,
  /data\s*:\s*text\/html/gi,
  /vbscript\s*:/gi,
  /on(error|load|click|mouseover|submit|focus|blur|change)\s*=/gi,
  /<iframe\b[^>]*>/gi,
  /<svg\b[^>]*>/gi,
  /<img\b[^>]*\bonerror\b/gi,
  /eval\s*\(/gi,
  /document\s*\.\s*(location|cookie|write)/gi,
];

/**
 * Checks if a string contains known SQL Injection syntax or meta-characters
 */
export function containsSqlInjection(value: string): boolean {
  if (!value || typeof value !== 'string') return false;
  return SQLI_PATTERNS.some((pattern) => pattern.test(value));
}

/**
 * Checks if a string contains known XSS / executable script payloads
 */
export function containsXss(value: string): boolean {
  if (!value || typeof value !== 'string') return false;
  return XSS_PATTERNS.some((pattern) => pattern.test(value));
}

/**
 * Sanitizes input to neutralize SQL injection vectors
 * Escapes quotes, removes dangerous SQL comment sequences and semicolons.
 */
export function sanitizeSql(value: string): string {
  if (!value || typeof value !== 'string') return '';
  return value
    .replace(/[\0\r\n\x1a]/g, '') // Strip binary/control characters
    .replace(/['"\\]/g, '\\$&') // Escape single and double quotes and backslashes
    .replace(/--/g, '') // Strip SQL comment markers
    .replace(/\/\*[\s\S]*?\*\//g, '') // Strip SQL block comments
    .replace(/;/g, '') // Strip query chaining semicolons
    .trim();
}

/**
 * Sanitizes input for safe HTML/DOM rendering, escaping special HTML entities
 */
export function sanitizeHtml(value: string): string {
  if (!value || typeof value !== 'string') return '';
  const entityMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;',
  };
  return value.replace(/[&<>"'`=\/]/g, (s) => entityMap[s] || s).trim();
}

/**
 * Helper to test if a key or value attempts prototype pollution
 */
export function isPrototypePollution(str: string): boolean {
  if (!str || typeof str !== 'string') return false;
  const lower = str.toLowerCase();
  return (
    lower.includes('__proto__') ||
    lower.includes('constructor') ||
    lower.includes('prototype')
  );
}

/**
 * Deeply sanitizes an object to eliminate Prototype Pollution
 */
export function sanitizeObject<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item)) as unknown as T;
  }

  const cleanObj: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (isPrototypePollution(key)) {
      // Drop prototype-polluting key
      continue;
    }
    cleanObj[key] = sanitizeObject(value);
  }
  return cleanObj as T;
}

/**
 * Inspects and sanitizes URL search parameters
 * Strips out malicious SQL/XSS payloads and prototype pollution while preserving legitimate tags (e.g. utm_source).
 */
export function sanitizeQueryParams(search: string): { cleanSearch: string; wasSanitized: boolean } {
  if (!search || search === '' || search === '?') {
    return { cleanSearch: '', wasSanitized: false };
  }

  const cleanParams = new URLSearchParams();
  let wasSanitized = false;

  try {
    const rawParams = new URLSearchParams(search);

    rawParams.forEach((val, key) => {
      // 1. Prototype Pollution Check (Raw)
      if (isPrototypePollution(key) || isPrototypePollution(val)) {
        wasSanitized = true;
        return;
      }

      // 2. Decode for inspection
      let decodedKey = key;
      let decodedVal = val;
      try {
        decodedKey = decodeURIComponent(key);
        decodedVal = decodeURIComponent(val);
      } catch {
        wasSanitized = true;
        return;
      }

      // 3. Prototype Pollution Check (Decoded)
      if (isPrototypePollution(decodedKey) || isPrototypePollution(decodedVal)) {
        wasSanitized = true;
        return;
      }

      // 4. SQLi & XSS Detection on key and value
      if (
        containsSqlInjection(decodedKey) ||
        containsSqlInjection(decodedVal) ||
        containsXss(decodedKey) ||
        containsXss(decodedVal)
      ) {
        wasSanitized = true;
        // Hostile signature detected — do not append to cleanParams
        return;
      }

      // 5. Clean and safe parameter
      cleanParams.set(encodeURIComponent(decodedKey.trim()), encodeURIComponent(decodedVal.trim()));
    });
  } catch {
    return { cleanSearch: '', wasSanitized: true };
  }

  const cleanStr = cleanParams.toString();
  return {
    cleanSearch: cleanStr ? `?${cleanStr}` : '',
    wasSanitized: wasSanitized || cleanStr !== search.replace(/^\?/, ''),
  };
}
