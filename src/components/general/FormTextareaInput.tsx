import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputName = "description";

interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputName: InputName;
  inputPlaceholder: string;
  value?: string;
}

export const FormTextareaInput = ({
  register,
  errors,
  inputName,
  inputPlaceholder,
  value,
}: IFormTextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        className={`${
          errors[inputName]
            ? "border-red-500 focus:border-red-500"
            : "focus:border-primary border-base-200"
        } transition-all duration-300 outline-none p-2 focus:outline-none resize-none textarea textarea-lg w-full`}
        placeholder={inputPlaceholder}
        autoComplete="current-password"
        defaultValue={value}
        {...register(inputName)}
      />
      {errors[inputName] && (
        <p className="text-xs text-red-500 font-roboto">
          {errors[inputName]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
