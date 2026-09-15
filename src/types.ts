export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
  icon: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
