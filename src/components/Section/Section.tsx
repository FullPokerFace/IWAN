import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  isFullScreen?: boolean;
  className?: string;
  fullSectionClass?: string;
  [x: string]: unknown;
};

const Section = ({
  children,
  isFullScreen = false,
  className,
  fullSectionClass,
  ...rest
}: TProps) => {
  const sectionClassName = "mx-auto max-w-7xl p-10 md:p-20";
  return isFullScreen ? (
    <section className={`w-full ${fullSectionClass}`}>
      <section className={`${sectionClassName} ${className}`} {...rest}>
        {children}
      </section>
    </section>
  ) : (
    <section className={`${sectionClassName} ${className}`} {...rest}>
      {children}
    </section>
  );
};

export default Section;
