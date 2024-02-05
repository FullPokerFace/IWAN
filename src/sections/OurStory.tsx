import Section from "../components/Section/Section";
import TextBlock from "../components/TextBlock/TextBlock";
import Heading7 from "../components/Headings/Heading7";

const OurStory = () => {
  return (
    <Section
      isFullScreen
      fullSectionClass="relative text-slate-950"
      id="our-story"
    >
      <Heading7>
        Our Story: From{" "}
        <span className="italic font-normal">Neighborhood Roots</span> to
        Crafting <span className="italic font-normal">Digital Communities</span>
      </Heading7>
      <article className="flex flex-col gap-6">
        <TextBlock>
          New York; a spirited, bustling city where we honed our web design and
          development skills surrounded by creative mavens in esteemed design
          studios. Drawn by the pulsing energy of digital innovation, we
          flourished amidst the city lights and towering skyscrapers. It was
          here, at the heart of design renaissance, that Island Web Apps was
          born.
          <br />
          <br />
          Transcending the traditional bounds of service, we chose a path less
          traveled. Our mission is to create digital tools that don't merely
          exist but monetize, turning your website from a passive billboard into
          an active revenue machine. We believe that your online platform
          shouldn't only express your brand story but strategically generate
          value.
          <br />
          <br />
          Today, we combine our New York-honed skills with a wholehearted
          commitment to helping businesses harness the power of the digital
          world. Island Web Apps is more than just a web design and development
          agency - it's your partner, dedicated to propelling your business
          towards sustained digital success.
        </TextBlock>
        <div className="bg-our-story min-h-96 object-fill bg-cover bg-no-repeat bg-center"></div>
      </article>
      <div className="bg-white absolute w-full h-full top-0 left-0 right-0 -z-20"></div>
      <div className="bg-slate-950 absolute w-full h-[180px] md:h-[180px] bottom-0 left-0 right-0 -z-10"></div>
    </Section>
  );
};

export default OurStory;
