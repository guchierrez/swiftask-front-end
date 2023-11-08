import { Navbar } from "./components/general/Navbar";
import { Toaster } from "react-hot-toast";
import { AddTaskModal } from "./components/addTaskModal/AddTaskModal";

import { DeleteTaskModal } from "./components/deleteTaskModal/DeleteTaskModal";
import { EditTaskModal } from "./components/editTaskModal/EditTaskModal";
import { Dashboard } from "./components/general/Dashboard";

function App() {
  return (
    <>
      <AddTaskModal />
      <EditTaskModal />
      <DeleteTaskModal />
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
