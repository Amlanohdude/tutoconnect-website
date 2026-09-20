import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { Plus, ArrowRight } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  faqs: FaqItem[];
  onNavigate: (route: PageRoute) => void;
  contactPromptText?: string;
  contactLinkText?: string;
  includeJsonLd?: boolean;
  className?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title = 'Frequently Asked Questions',
  eyebrow,
  subtitle = 'Clear, transparent answers about tuition discovery, fees, and safety in Guwahati.',
  faqs,
  onNavigate,
  contactPromptText = 'Have another question?',
  contactLinkText = 'Reach out to our Guwahati team',
  includeJsonLd = true,
  className = '',
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`py-20 sm:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden ${className}`}>
      {/* Technical SEO: Schema.org FAQPage Structured Data (JSON-LD) */}
      {includeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Minimal Header */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center space-y-3">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-[#64748B] max-w-lg mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Hairline Divider List */}
        <div className="max-w-3xl mx-auto border-t border-[#E2E8F0] divide-y divide-[#E2E8F0]">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.q} className="group">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer select-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-6 h-6 flex items-center justify-center shrink-0 text-[#64748B] group-hover:text-[#2563EB] transition-transform duration-200 ${
                      isOpen ? 'rotate-45 text-[#2563EB]' : ''
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-8 text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Minimal 1-Line Contact Prompt */}
        <div className="mt-12 text-center text-sm text-[#64748B]">
          <span>{contactPromptText} </span>
          <button
            type="button"
            onClick={() => onNavigate('/contact/')}
            className="font-medium text-[#2563EB] hover:underline cursor-pointer inline-flex items-center gap-1"
          >
            <span>{contactLinkText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
