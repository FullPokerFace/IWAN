import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  [x: string]: unknown;
};

const PrimaryButton = ({ children, ...rest }: IProps) => {
  return (
    <button
      className="placeholder-gray-300 bg-slate-950 border border-slate-400 py-3 px-7 hover:bg-slate-800"
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
