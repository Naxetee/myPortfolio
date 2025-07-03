export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string; // ISO 8601 format
}

export interface NewContactMessage {
  name: string;
  email: string;
  message: string;
}