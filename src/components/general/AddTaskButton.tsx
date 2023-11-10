import { AiOutlinePlusCircle } from "react-icons/ai";
import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";
import toast from "react-hot-toast";

export const AddTaskButton = () => {
  const { addTaskModalRef, mainLoading, loadTodos } = useContext(MainContext);
  return (
    <button
      onClick={() => {
        if (mainLoading) {
          loadTodos();
          toast("Fetching data from API, please wait or refresh the website.");
        } else {
          addTaskModalRef.current?.showModal();
        }
      }}
      className="mx-auto border-0 rounded-full btn btn-outline w-fit h-fit"
    >
      <AiOutlinePlusCircle size="2em" />
    </button>
  );
};
