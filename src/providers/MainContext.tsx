import { createContext, useRef, ReactNode } from "react";

export interface IMainContext {
  addTaskModalRef: React.RefObject<HTMLDialogElement>;
  editTaskModalRef: React.RefObject<HTMLDialogElement>;
  deleteTaskModalRef: React.RefObject<HTMLDialogElement>;
}

export interface IMainContextProps {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export const MainProvider = ({ children }: IMainContextProps) => {
  const addTaskModalRef = useRef<HTMLDialogElement>(null);
  const editTaskModalRef = useRef<HTMLDialogElement>(null);
  const deleteTaskModalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <MainContext.Provider
        value={{
          addTaskModalRef,
          editTaskModalRef,
          deleteTaskModalRef,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
};
