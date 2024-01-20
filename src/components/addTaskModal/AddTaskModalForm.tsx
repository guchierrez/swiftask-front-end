import { SubmitHandler, useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import { TTaskFormSchema, TaskFormSchema } from "../../schemas/TaskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormTextareaInput } from "../general/FormTextareaInput";
import { MainContext } from "../../providers/MainContext";
import { FormTextInput } from "../general/FormTextInput";

export const AddTaskForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TTaskFormSchema>({
    resolver: zodResolver(TaskFormSchema),
  });

  const { addTodo, addTaskModalRef } = useContext(MainContext);

  const submit: SubmitHandler<TTaskFormSchema> = (formData) => {
    addTodo(formData);
    addTaskModalRef.current?.close();
    reset();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(submit)}>
      <FormTextInput
        errors={errors}
        inputName="name"
        inputPlaceholder="Title"
        register={register}
        inputType="text"
      />
      <FormTextareaInput
        errors={errors}
        inputName="description"
        inputPlaceholder="Description"
        register={register}
      />
      <button className="self-end h-10 px-8 text-xs tracking-widest rounded-none btn btn-sm btn-primary w-fit font-oswald">
        <BsPlusCircle className="text-lg" />
        ADD
      </button>
    </form>
  );
};
