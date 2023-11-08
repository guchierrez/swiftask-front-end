import Lottie from "lottie-react";
import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";
import { ToDoCard } from "./ToDoCard";
import Empty from "../../assets/Empty.json";

export const ToDoDashboard = () => {
  const { todos } = useContext(MainContext);
  return (
    <div className="flex flex-wrap w-full h-full gap-10 py-8">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ToDoCard
            key={todo.id}
            description={todo.description}
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-40 mx-auto h-fit animate-fade-translate">
          <Lottie animationData={Empty} className="w-60 fill-blue-500" />
          <p className="text-xl font-black tracking-widest text-center uppercase text-base-100">
            No to dos were found :(
          </p>
        </div>
      )}
    </div>
  );
};
