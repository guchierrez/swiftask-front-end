import { Navbar } from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { AddTaskModal } from "./components/addTaskModal/AddTaskModal";
import { ToDoCard } from "./components/ToDoCard";
import { DeleteTaskModal } from "./components/deleteTaskModal/DeleteTaskModal";
import { EditTaskModal } from "./components/editTaskModal/EditTaskModal";

function App() {
  return (
    <>
      <AddTaskModal />
      <EditTaskModal />
      <DeleteTaskModal />
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <div className="bg-white/90 flex flex-col px-10 py-3 md:w-[90%] w-2/3 ml-auto h-screen overflow-y-auto">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-xs mb-10 transition-all duration-300 outline-none shrink-0 bg-white/90 border-base-100 input focus:border-blue-500 focus:outline-none"
        />
        <div className="flex flex-wrap w-full h-screen gap-10">
          <ToDoCard />
          <ToDoCard />
          <ToDoCard />
          <ToDoCard />
          <ToDoCard />
          <ToDoCard />
          <ToDoCard />
          <ToDoCard />
          <ToDoCard />
        </div>
      </div>
    </>
  );
}

export default App;
