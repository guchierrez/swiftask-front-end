import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TTaskFormSchema, TaskFormSchema } from "../../schemas/TaskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormTextareaInput } from "../FormTextareaInput";
import { MainContext } from "../../providers/MainContext";
import { FormTextInput } from "../FormTextInput";

export const EditTaskForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TTaskFormSchema>({
    resolver: zodResolver(TaskFormSchema),
  });

  const { editTaskModalRef } = useContext(MainContext);

  const submit: SubmitHandler<TTaskFormSchema> = (formData) => {
    // addProduct(formData);
    reset();
    editTaskModalRef.current?.close();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(submit)}>
      <FormTextInput
        errors={errors}
        inputName="title"
        inputPlaceholder="Title"
        register={register}
        inputType="text"
      />
      <FormTextareaInput
        errors={errors}
        inputName="description"
        inputPlaceholder="Task description"
        register={register}
      />
      <button className="self-end h-10 px-8 text-xs tracking-widest rounded-none btn btn-sm btn-primary w-fit font-oswald">
        <MdOutlineModeEditOutline className="text-lg" />
        EDIT
      </button>
    </form>
  );
};
