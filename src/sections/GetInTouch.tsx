import Section from "../components/Section/Section";
import Heading7 from "../components/Headings/Heading7";
import TextField from "../components/TextField/TextField";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import Dialog from "../components/Dialog/Dialog";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Section isFullScreen fullSectionClass="relative" id="get-in-touch">
      <Dialog showDialog={showDialog} setShowDialog={setShowDialog}></Dialog>
      <Heading7>
        Let's Begin <span className="italic font-normal">Together </span>{" "}
      </Heading7>
      <article className="flex flex-col md:flex-row gap-10 md:gap-36 justify-center my-20 ">
        <p>
          Ready to embark on your journey?
          <br />
          Reach out to us now!
          <br />
          <br />
          <a href="email:info@iwan-web.com" className="text-2xl font-thin">
            email: info@iwan-web.com
          </a>
          <br />
          <br />
          <a href="tel:3476772699" className="text-2xl font-thin">
            phone +1 (347) 677-2699
          </a>
          <br />
          <a href="sms:3476772699" className="text-2xl font-thin">
            text +1 (347) 677-2699
          </a>
          <br />
          <br />
          <p className="text-2xl font-thin">10 Croft Ct</p>
          <p className="text-2xl font-thin">Staten Island, NY 10306</p>
        </p>

        <div className="flex flex-col gap-6">
          <TextField
            placeholder="Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <TextField
            placeholder="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <TextField
            placeholder="Message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
          />
          <PrimaryButton onClick={() => setShowDialog(true)}>
            Send
          </PrimaryButton>
        </div>
      </article>
    </Section>
  );
};

export default GetInTouch;
