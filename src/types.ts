export type PageRoute =
  | '/'
  | '/tuition/guwahati/'
  | '/become-a-tutor/'
  | '/how-it-works/'
  | '/about/'
  | '/contact/'
  | '/privacy-policy/'
  | '/terms/'
  | '/download/'
  | '/find-a-tutor/';

export interface NavLink {
  label: string;
  href: PageRoute;
  badge?: string;
}

export interface TuitionOption {
  title: string;
  description: string;
  tag: string;
  iconName: string;
  note: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  details?: string;
}
