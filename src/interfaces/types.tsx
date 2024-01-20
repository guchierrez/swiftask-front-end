import { ReactNode } from "react";
import { TTaskFormSchema } from "../schemas/TaskSchema";

export interface IMainContext {
  addTaskModalRef: React.RefObject<HTMLDialogElement>;
  editTaskModalRef: React.RefObject<HTMLDialogElement>;
  deleteTaskModalRef: React.RefObject<HTMLDialogElement>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  mainLoading: boolean;
  setMainLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addTodo: (formData: TTaskFormSchema) => Promise<void>;
  deleteTodo: (productId: number) => Promise<void>;
  editTodo: (formData: TTaskFormSchema, todoId: number) => Promise<void>;
  getSelectedTodoId: (e: any) => void;
  selectedTodo: ITodo | null;
  setSelectedTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  toggleCompleted: (e: any) => Promise<void>;
  loadTodos: () => Promise<void>;
  addButton: boolean;
  setAddButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITodo {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

export interface IMainContextProps {
  children: ReactNode;
}
