import { ReactNode } from "react";

const Heading7 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-3xl md:text-7xl font-thin text-center leading-normal">
      {children}
    </h1>
  );
};

export default Heading7;
