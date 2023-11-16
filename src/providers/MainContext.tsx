import { createContext, useRef, useState, useEffect } from "react";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { TTaskFormSchema } from "../schemas/TaskSchema";
import { IMainContext, IMainContextProps, ITodo } from "../interfaces";

export const MainContext = createContext({} as IMainContext);

export const MainProvider = ({ children }: IMainContextProps) => {
  const addTaskModalRef = useRef<HTMLDialogElement>(null);
  const editTaskModalRef = useRef<HTMLDialogElement>(null);
  const deleteTaskModalRef = useRef<HTMLDialogElement>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);

  const [mainLoading, setMainLoading] = useState<boolean>(false);
  const [addButton, setAddButton] = useState<boolean>(false);

  const loadTodos = async () => {
    setMainLoading(true);
    try {
      const { data } = await api.get("/todos");
      setTodos(data);
    } catch (error: any) {
      toast.error("There was an internal server error.");
    } finally {
      setAddButton(false);
      setMainLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (formData: TTaskFormSchema) => {
    try {
      const { data } = await api.post("/todos", formData, {});
      setTodos((todos) => [...todos, data]);
      toast.success(`To do added successfully.`);
    } catch (error: any) {
      toast.error(error?.response?.data);
    } finally {
      setAddButton(true);
      loadTodos();
    }
  };

  const deleteTodo = async (productId: string) => {
    try {
      await api.delete(`/todos/${productId}`, {});
      setTodos((todos) => todos.filter((todo) => todo.id !== productId));
      toast.success("To do deleted successfully.");
    } catch (error: any) {
      toast.error(error?.response?.data);
    } finally {
      setAddButton(true);
      loadTodos();
    }
  };

  const editTodo = async (formData: TTaskFormSchema, todoId: string) => {
    try {
      await api.patch(`/todos/${todoId}`, formData, {});
      setTodos((todos) =>
        todos.map((todo) => {
          if (todoId === todo.id) {
            const updatedTodo = {
              title: formData.title,
              description: formData.description,
            };
            return { ...todo, ...updatedTodo };
          } else {
            return todo;
          }
        })
      );
      toast.success("To do updated succesfully.");
    } catch (error: any) {
      toast.error(error?.response?.data);
    } finally {
      setAddButton(true);
      loadTodos();
    }
  };

  const toggleCompleted = async (e: any) => {
    const todoId = e?.target?.closest(".parent-selector").id;
    const filteredTodo = todos.filter((todo) => todo.id === todoId);
    e.target.disabled = true;

    // Introduce a delay of 200ms using setTimeout
    setTimeout(async () => {
      try {
        const updatedTodo = {
          completed: !filteredTodo[0].completed,
        };
        await api.patch(`/todos/${todoId}`, updatedTodo);
        setTodos((todos) =>
          todos.map((todo) => {
            if (todoId === todo.id) {
              const updatedTodo = {
                completed: !filteredTodo[0].completed,
              };
              return { ...todo, ...updatedTodo };
            } else {
              return todo;
            }
          })
        );
        toast.success("Action was successful.");
      } catch (error: any) {
        console.log(error);
      } finally {
        setSelectedTodo(null);
        e.target.disabled = false;
      }
    }, 500);
  };

  const getSelectedTodoId = async (e: any): Promise<void> => {
    const todoId = e?.target?.closest(".parent-selector").id;
    const filteredTodo = todos.filter((todo) => todo.id === todoId);
    await setSelectedTodo(filteredTodo[0]);
    return;
  };

  return (
    <>
      <MainContext.Provider
        value={{
          addTaskModalRef,
          editTaskModalRef,
          deleteTaskModalRef,
          mainLoading,
          setMainLoading,
          setTodos,
          todos,
          addTodo,
          deleteTodo,
          editTodo,
          getSelectedTodoId,
          selectedTodo,
          setSelectedTodo,
          toggleCompleted,
          loadTodos,
          addButton,
          setAddButton,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
};
