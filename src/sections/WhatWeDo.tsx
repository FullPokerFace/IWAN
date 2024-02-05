import Section from "../components/Section/Section";
import TextBlock from "../components/TextBlock/TextBlock";
import Heading10 from "../components/Headings/Heading10";
import Heading7 from "../components/Headings/Heading7";

const WhatWeDo = () => {
  return (
    <Section
      isFullScreen
      fullSectionClass="relative bg-white text-slate-950"
      id="what-we-do"
    >
      <Heading7>
        Our Commitment: Empower{" "}
        <span className="italic font-normal">Your Digital Presence</span>
      </Heading7>
      <article className="flex flex-col md:flex-row  gap-6">
        <TextBlock>
          <Heading10>
            $99<span className="pl-4 text-3xl">/Month</span>
          </Heading10>
          <div className="flex flex-col gap-3 text-sm md:text-md">
            <p className="font-bold">
              ✓ &nbsp; Custom Website Design & Development
            </p>
            <p>✓ &nbsp; $0 Down & Zero Maintenance Costs</p>
            <p className="font-bold">✓ &nbsp; Unlimited Revisions</p>
            <p>✓ &nbsp; Website Analytics and Reporting</p>
            <p className="font-bold">
              ✓ &nbsp; 24/7 Support & Customer Service
            </p>
            <p>✓ &nbsp; SEO Optimization</p>
          </div>
        </TextBlock>
        <TextBlock>
          At Island Web Apps, we've crafted an unbeatable package that strides
          beyond the ordinary, and is as unique as your business. For just{" "}
          <span className="font-bold">$99 per month</span>, we promise a
          custom-designed website with{" "}
          <span className="font-bold">$0 down and zero maintenance costs.</span>
          <br />
          <br />
          But we don't stop there; we go beyond the confines of service in favor
          of a customer-first commitment. We{" "}
          <span className="font-bold">offer unlimited revisions</span>. In this
          dynamic internet era, stagnation isn't acceptable - hence, we will
          update your website as long as it takes, ensuring your{" "}
          <span className="font-bold">
            online presence remains fresh, engaging and up-to-date.
          </span>
          <br />
          <br />
          Welcome to a partnership designed to keep your digital landscape lush
          and thriving - because at Island Web Apps,{" "}
          <span className="font-bold">
            we foster a powerful web presence that continually evolves with your
            vision.
          </span>
        </TextBlock>
      </article>
    </Section>
  );
};

export default WhatWeDo;
