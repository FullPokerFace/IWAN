import { ReactNode } from "react";

const Heading9 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-3xl md:text-9xl font-thin text-center leading-normal">
      {children}
    </h1>
  );
};

export default Heading9;
