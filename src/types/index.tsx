export type Note = {
  id: string | undefined;
  createdAt: string;
  content: string;
  category: Categories;
  active: boolean;
  dates: string[];
};
export type Categories = {
  category: 'Idea' | 'Task' | 'Random Thought';
};
