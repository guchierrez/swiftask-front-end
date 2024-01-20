import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";

export interface IToDoCardProps {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

export const ToDoCard = ({
  name,
  description,
  completed,
  id,
}: IToDoCardProps) => {
  const {
    editTaskModalRef,
    deleteTaskModalRef,
    getSelectedTodoId,
    toggleCompleted,
    selectedTodo,
  } = useContext(MainContext);

  return (
    <div
      id={String(id)}
      className="w-full h-48 lg:h-60 lg:w-1/4 indicator parent-selector animate-fade-translate"
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={async (e) => {
          await toggleCompleted(e);
          if (selectedTodo) toggleCompleted(selectedTodo.id);
        }}
        className="shadow indicator-item badge badge-secondary checkbox checkbox-success"
      />
      <div
        className={`${
          completed ? "bg-success" : ""
        } relative duration-300 transition-colors flex flex-col w-full p-4 overflow-hidden rounded-sm shadow-2xl bg-primary`}
      >
        <h1 className="pb-4 text-lg font-black tracking-wide break-words whitespace-normal">
          {name}
        </h1>
        <p className="font-thin tracking-wide break-words whitespace-normal">
          {description}
        </p>
        <div className="absolute lg:right-4 lg:bottom-4 bottom-2 right-2">
          <button
            className="border-0 rounded-full btn btn-ghost disabled:btn-ghost disabled:opacity-50 w-fit"
            disabled={completed}
            onClick={(e) => {
              deleteTaskModalRef.current?.showModal();
              getSelectedTodoId(e);
            }}
          >
            <BsFillTrashFill size="1.5em" />
          </button>
          <button
            className="border-0 rounded-full btn btn-ghost disabled:btn-ghost disabled:opacity-50 w-fit"
            disabled={completed}
            onClick={(e) => {
              editTaskModalRef.current?.showModal();
              getSelectedTodoId(e);
            }}
          >
            <MdOutlineModeEditOutline size="1.5em" />
          </button>
        </div>
      </div>
    </div>
  );
};
