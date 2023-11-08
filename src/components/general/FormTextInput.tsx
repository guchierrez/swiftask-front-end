import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputName = "title";

interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputName: InputName;
  inputType: string;
  inputPlaceholder: string;
  value?: string;
}

export const FormTextInput = ({
  register,
  errors,
  inputName,
  inputType,
  inputPlaceholder,
  value,
}: IFormTextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        className={`${
          errors[inputName]
            ? "border-red-500 focus:border-red-500"
            : "focus:border-primary border-base-200"
        } transition-all duration-300 outline-none p-2 focus:outline-none resize-none input`}
        type={inputType}
        placeholder={inputPlaceholder}
        autoComplete="current-password"
        {...register(inputName)}
        defaultValue={value}
      />
      {errors[inputName] && (
        <p className="text-xs text-red-500 font-roboto">
          {errors[inputName]?.message?.toString()}
        </p>
      )}
    </div>
  );
};
