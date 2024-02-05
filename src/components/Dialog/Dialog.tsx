import { useEffect, useState } from "react";
import Heading7 from "../Headings/Heading7";

type IProps = {
  showDialog: boolean;
  setShowDialog: (show: boolean) => void;
};

const Dialog = ({ showDialog, setShowDialog }: IProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showDialog);
  }, [showDialog]);

  if (!show) return <></>;
  return (
    <>
      <section className="fixed bg-slate-950 border border-slate-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 z-30">
        <Heading7>Thank you</Heading7>
        Your message has been sent.
      </section>
      <div
        onClick={() => {
          setShow(false);
          setShowDialog(false);
        }}
        className="bg-slate-900 fixed left-0 right-0 top-0 bottom-0 z-20 opacity-75"
      ></div>
    </>
  );
};

export default Dialog;
