import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { MainContext } from "../providers/MainContext";

export const ToDoCard = () => {
  const { editTaskModalRef, deleteTaskModalRef } = useContext(MainContext);

  return (
    <div className=" indicator md:w-1/4">
      <input
        type="checkbox"
        className="badge badge-secondary indicator-item checkbox checkbox-success"
      />
      <div className="relative h-48 p-4 rounded-sm shadow-2xl bg-primary">
        <p className="font-thin tracking-wide">
          This is just a test. I'm writing a task and wondering how I'm gonna
          style it.
        </p>
        <div className="absolute flex right-4 bottom-4">
          <button
            className="border-0 rounded-full btn btn-ghost w-fit"
            onClick={() => {
              deleteTaskModalRef.current?.showModal();
            }}
          >
            <BsFillTrashFill size="1.5em" />
          </button>
          <button
            className="border-0 rounded-full btn btn-ghost w-fit"
            onClick={() => {
              editTaskModalRef.current?.showModal();
            }}
          >
            <MdOutlineModeEditOutline size="1.5em" />
          </button>
        </div>
      </div>
    </div>
  );
};
