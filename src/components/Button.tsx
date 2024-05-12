import { ComponentProps, FC, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-emerald-300 font-semibold rounded px-3 py-1 border-none transition-all ease-in-out hover:bg-emerald-500"
      {...props}
    >
      {children}
    </button>
  );
};
