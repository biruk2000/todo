export interface Todo {
  id: number;
  title: string;
  description: string;
  status: "pending" | "completed";
  urgency: "low" | "medium" | "high";
  userId: number;
}

export interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}
