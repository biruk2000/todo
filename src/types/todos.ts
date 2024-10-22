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
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
}
