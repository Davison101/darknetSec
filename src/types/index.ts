export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  duration?: string;
}

export interface RepairStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  technician?: string;
  timestamp?: Date;
}

export interface RepairJob {
  id: string;
  deviceType: string;
  status: 'pending' | 'diagnostics' | 'in-progress' | 'testing' | 'ready' | 'completed';
  steps: RepairStep[];
  estimatedTime: string;
  progress: number;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  verified: boolean;
  date: Date;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  deviceType: string;
  problemDescription: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface StatisticItem {
  label: string;
  value: number | string;
  icon?: string;
  suffix?: string;
}

export interface DiagnosisResult {
  issue: string;
  causes: string[];
  estimatedTime: string;
  recommendedService: string;
}
