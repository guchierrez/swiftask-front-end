import { AddTaskButton } from "./AddTaskButton";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <div className="z-10 absolute bg-base-100 sm:flex hidden gap-5 min-h-screen w-1/3 md:w-[10%] border-r border-base-200">
      <div className="flex flex-col gap-5 py-6 mx-auto">
        <Logo />
        <AddTaskButton />
      </div>
    </div>
  );
};
