import React from "react";
import { ComponentProps, FC } from "react";

interface InputFormProps extends ComponentProps<"input"> {
  title: string;
  type: string;
  error?: string | null;
}

export const InputForm: FC<InputFormProps> = React.forwardRef<
  HTMLInputElement,
  Omit<InputFormProps, "ref">
>(({ title, error, type, ...props }, ref) => {
  return (
    <div className="flex flex-col justify-start my-2">
      <label className="text-neutral-200 text-lg ">{title}</label>
      <input
        className="rounded-md outline-none  px-3 py-2 bg-emerald-200"
        {...props}
        ref={ref}
        type={type}
      />
      {!!error && <p className="text-rose-600">{error}</p>}
    </div>
  );
});
