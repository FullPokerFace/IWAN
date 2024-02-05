import { useState } from "react";
import Logo from "../Logo/Logo";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { nanoid } from "nanoid";

const menuList = [
  {
    title: "OUR WORK",
    link: "our-work",
  },
  {
    title: "WHAT WE DO",
    link: "what-we-do",
  },
  {
    title: "THE STORY",
    link: "our-story",
  },
  {
    title: "GET IN TOUCH",
    link: "get-in-touch",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <section className="md:flex hidden w-full flex-col md:flex-row m-10 text-white font-bolder  text-xs justify-between items-center tracking-[3px]">
        <div className="flex gap-10 mx-10 flex-row">
          <DesktopNavItem {...menuList[0]} />
          <DesktopNavItem {...menuList[1]} />
        </div>
        <div className="w-[300px] opacity-75 ">
          <Logo />
        </div>
        <div className="flex gap-10 mx-10 flex-row">
          <DesktopNavItem {...menuList[2]} />
          <DesktopNavItem {...menuList[3]} />
        </div>
      </section>

      {/* Mobile */}
      <section className="flex md:hidden w-full flex-col md:flex-row m-2 text-white font-bolder  text-xs justify-between items-center tracking-[3px] ">
        <div className="w-[300px] opacity-75 md:hidden block">
          <Logo />
        </div>
        {/* Mobile Menu */}
        <button
          className="my-3"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        {open && (
          <article className="w-full text-center absolute translate-y-16 z-10">
            <div className="w-[300px] opacity-75 hidden md:block">
              <Logo />
            </div>
            <div className="flex md:gap-10 mx-10 flex-col md:flex-row">
              {menuList?.map((item, index) => (
                <MobileNavItem
                  key={nanoid()}
                  title={item.title}
                  link={item.link}
                  delay={Number(index * 100)}
                />
              ))}
            </div>
          </article>
        )}
      </section>
    </>
  );
};

export const MobileNavItem = ({
  title,
  link,
  delay,
}: {
  title: string;
  link: string;
  delay: number;
}) => {
  return (
    <a
      className="block p-3 animate-fadeOut opacity-0 scale-75"
      style={{ animationDelay: `${delay}ms` }}
      href="#"
      onClick={() => {
        document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {title}
    </a>
  );
};

export const DesktopNavItem = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => {
  return (
    <a
      onClick={() => {
        document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
      }}
      className="hover:animate-zooomIn block p-3"
      href="#"
    >
      {title}
    </a>
  );
};

export default Navigation;
