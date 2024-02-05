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
      <section className="md:flex hidden w-full flex-col md:flex-row p-10 text-white font-bolder  text-xs justify-between items-center tracking-[3px] fixed z-40">
        <div className="flex gap-10 mx-10 flex-row z-10">
          <DesktopNavItem {...menuList[0]} />
          <DesktopNavItem {...menuList[1]} />
        </div>
        <div className="w-[300px] opacity-75 z-10">
          <Logo />
        </div>
        <div className="flex gap-10 mx-10 flex-row z-10">
          <DesktopNavItem {...menuList[2]} />
          <DesktopNavItem {...menuList[3]} />
        </div>
        <div className="min-h-40 absolute left-0 bottom-0 w-full bg-gradient-to-t from-transparent to-slate-950"></div>
      </section>

      {/* Mobile */}
      <section className="flex md:hidden w-full flex-col md:flex-row text-white font-bolder  text-xs justify-between items-center tracking-[3px] p-6 fixed z-40">
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
                  setOpen={setOpen}
                  delay={Number(index * 100)}
                />
              ))}
            </div>
          </article>
        )}
        {open && (
          <div className="min-h-96 absolute left-0 top-0 bottom-0 w-full bg-gradient-to-t from-transparent to-slate-950 -z-10"></div>
        )}
        {!open && (
          <div className="min-h-32 absolute left-0 top-0 bottom-0 w-full bg-gradient-to-t from-transparent to-slate-950 -z-10"></div>
        )}
      </section>
    </>
  );
};

export const MobileNavItem = ({
  title,
  link,
  delay,
  setOpen,
}: {
  title: string;
  link: string;
  delay: number;
  setOpen: (arg: boolean) => void;
}) => {
  return (
    <a
      className="block p-3 animate-fadeOut opacity-0 scale-75"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => {
        document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
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
