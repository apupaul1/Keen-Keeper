export type TStatus = "overdue" | "almost due" | "on-track";

export interface Friend {
  id: number;
  name: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: TStatus;
  tags: string[];
  bio: string;
  goal: number;
  next_due_date: string;
}
