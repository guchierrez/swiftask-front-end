import { AiOutlinePlusCircle } from "react-icons/ai";
import { useContext } from "react";
import { MainContext } from "../providers/MainContext";

export const AddTaskButton = () => {
  const { addTaskModalRef } = useContext(MainContext);
  return (
    <button
      onClick={() => addTaskModalRef.current?.showModal()}
      className="mx-auto border-0 rounded-full btn btn-outline w-fit h-fit"
    >
      <AiOutlinePlusCircle size="2em" />
    </button>
  );
};
