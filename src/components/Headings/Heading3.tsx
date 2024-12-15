import { ReactNode } from "react";

const Heading7 = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-3xl md:text-7xl font-thin text-center leading-normal">
      {children}
    </h2>
  );
};

export default Heading7;
