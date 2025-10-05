export interface Task {
  id: string; // uuid or timestamp string
  title: string;
  description?: string;
  completed: boolean;
  createdAt: number;
  dueDate?: string; //  ISO date string (bonus)
}
