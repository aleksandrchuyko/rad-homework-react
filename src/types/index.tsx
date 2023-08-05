export type Note = {
  id: string | undefined;
  createdAt: string;
  content: string;
  category: Categories;
  active: boolean;
  dates: string[];
};
export type Categories = 'Idea' | 'Task' | 'Random Thought';
