// Global TypeScript type definitions

export interface NavItem {
  name: string;
  href: string;
}

export interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  delay: number;
}

export interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  skills: string[];
  isNew: boolean;
  logo: string;
  accentColor: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  content: string;
  highlight: string;
}

export interface CompanyLogo {
  name: string;
  color: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  product: FooterLink[];
  company: FooterLink[];
  support: FooterLink[];
}
