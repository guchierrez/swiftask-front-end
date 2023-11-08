import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";
import { EditTaskForm } from "./EditTaskModalForm";

export const EditTaskModal = () => {
  const { editTaskModalRef } = useContext(MainContext);

  return (
    <dialog ref={editTaskModalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <h1 className="pb-4 text-xl font-black tracking-widest uppercase select-none ">
            Edit to do
          </h1>
          <button
            type="button"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={() => editTaskModalRef.current?.close()}
          >
            ✕
          </button>
        </form>
        <EditTaskForm />
      </div>
    </dialog>
  );
};
