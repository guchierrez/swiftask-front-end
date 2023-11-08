import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";
import { AddTaskForm } from "./AddTaskModalForm";

export const AddTaskModal = () => {
  const { addTaskModalRef } = useContext(MainContext);

  return (
    <dialog ref={addTaskModalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <h1 className="pb-4 text-xl font-black tracking-widest uppercase select-none">
            Add to do
          </h1>
          <button
            type="button"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={() => addTaskModalRef.current?.close()}
          >
            ✕
          </button>
        </form>
        <AddTaskForm />
      </div>
    </dialog>
  );
};
