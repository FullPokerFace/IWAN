import { ReactNode } from "react";

const Heading10 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-3xl text-[96px] md:text-[160px] font-thin text-center leading-normal">
      {children}
    </h1>
  );
};

export default Heading10;
