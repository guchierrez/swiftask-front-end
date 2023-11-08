import { ToDoDashboard } from "./ToDoDashboard";
import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";
import { Loading } from "./Loading";

export const Dashboard = () => {
  const { mainLoading } = useContext(MainContext);
  return (
    <div className="bg-white/90 flex flex-col px-10 py-3 md:w-[85%] w-3/4 ml-auto h-screen overflow-y-auto">
      {!mainLoading ? <ToDoDashboard /> : <Loading />}
    </div>
  );
};
