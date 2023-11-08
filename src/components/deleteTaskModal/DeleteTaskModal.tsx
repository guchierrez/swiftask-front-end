import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";
import { BsFillTrashFill } from "react-icons/bs";

export const DeleteTaskModal = () => {
  const { deleteTaskModalRef } = useContext(MainContext);

  return (
    <dialog ref={deleteTaskModalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            type="button"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={() => deleteTaskModalRef.current?.close()}
          >
            ✕
          </button>
          <h1 className="pb-4 text-xl font-black tracking-widest uppercase select-none">
            Delete to do
          </h1>
          <div className="flex flex-col gap-5">
            <p className="pt-2 pb-4 font-thin tracking-wide ">
              Are you sure you want to delete this to do?
            </p>
            <button className="h-10 px-8 ml-auto text-xs tracking-widest rounded-none btn btn-sm btn-primary w-fit font-oswald">
              <BsFillTrashFill className="text-lg" />
              DELETE
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
