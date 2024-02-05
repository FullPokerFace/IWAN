import { ReactNode } from "react";

const TextBlock = ({ children }: { children: ReactNode }) => {
  return <div className="font-thin p-0 md:p-20">{children}</div>;
};

export default TextBlock;
