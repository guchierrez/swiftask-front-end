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
      await setTodos(data);
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
      await api.post("/todos", formData, {});
      toast.success(`To do added successfully.`);

      setAddButton(true);
      loadTodos();

      console.log(todos);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const deleteTodo = async (productId: number) => {
    try {
      await api.delete(`/todos/${productId}`, {});
      setTodos((todos) => todos.filter((todo) => todo.id !== productId));
      toast.success("To do deleted successfully.");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setAddButton(true);
      await loadTodos();
    }
  };

  const editTodo = async (formData: TTaskFormSchema, todoId: number) => {
    try {
      await api.patch(`/todos/${todoId}`, formData, {});

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todoId === todo.id
            ? {
                ...todo,
                name: formData.name,
                description: formData.description,
              }
            : todo
        )
      );

      loadTodos();
      toast.success("To do updated successfully.");
      console.log(todos);
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setAddButton(true);
    }
  };

  const toggleCompleted = async (e: any) => {
    const todoId = parseInt(e?.target?.closest(".parent-selector").id);
    const filteredTodo = todos.filter((todo) => todo.id === todoId);
    console.log(e.target);
    console.log(todoId);
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
        toast.error(error.response.data.message);
      } finally {
        setSelectedTodo(null);
        e.target.disabled = false;
      }
    }, 500);
  };

  const getSelectedTodoId = async (e: any): Promise<void> => {
    const todoId = parseInt(e?.target?.closest(".parent-selector").id);
    const filteredTodo = todos.filter((todo) => todo.id === todoId);
    await setSelectedTodo(filteredTodo[0]);
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
