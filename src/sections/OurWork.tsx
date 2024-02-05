import Section from "../components/Section/Section";
import rfsImg from "/src/assets/images/rfs-promo.png";
import ahcImg from "/src/assets/images/ahc-promo.png";
import stlmImg from "/src/assets/images/stlm-promo.png";
import Heading7 from "../components/Headings/Heading7";

const projects = [
  {
    label: "ResumeFromSpace",
    link: "https://resumefromspace.com",
    image: rfsImg,
    descr: `Unveiling Project ResumeFromSpace - a quantum leap in resume
    creation. Powered by advanced AI, this tool engineers professional,
    impactful resumes without breaking a sweat. Merge innovation with
    career aspirations and watch as it crafts tailored assets to launch
    your career to new heights. With ResumeFromSpace, experience the
    future of resume building!`,
  },
  {
    label: "Angel Home Care",
    link: "https://angelhomecareagency.com",
    image: ahcImg,
    descr: `A fusion of compassionate care and advanced digital
    solutions, we're elevating the standards of home health care service. Angel Home Care
    provide tailored, efficient, and modern caregiving, thereby putting a
    cutting-edge spin on traditional home health practices. With Angel Home
    Care, experience the new era of personalized, luxury home health care.`,
  },
  {
    label: "STL Masters",
    link: "https://stlmasters.com",
    image: stlmImg,
    descr: `Revolutionizing Dentistry through the lens of technology. As a remote
    milling dental lab, STL masters digitize the precision and craftsmanship of dental
    prosthetics production. Utilizing advanced 3D modeling and machine
    learning, STL Masters brings an innovative approach to crafting flawless
    dental solutions. Experience precision and convenience harmonized 
    - where dentistry and digital progress meet.`,
  },
];

const OurWork = () => {
  return (
    <Section isFullScreen fullSectionClass="relative" id="our-work">
      <Heading7>
        Discover the <span className="italic font-normal">Gold Standard </span>{" "}
        in Web Design
      </Heading7>
      <article className="flex flex-col md:flex-row gap-12 md:gap-36 justify-center my-20 text-slate-950">
        {projects?.map((item, index) => (
          <div
            className={`f-full md:w-1/4 text-xs font-thin flex flex-col gap-4 ${
              index % 2 === 0 ? "" : "mt-10"
            }`}
          >
            <img
              src={item.image}
              alt={item.label}
              className="object-cover hover:md:animate-zooomIn cursor-pointer"
            />
            <h1 className="text-3xl font-thin">{item.label}</h1>
            <a
              href={item.link}
              className="font-thin text-sm hover:translate-x-4 transition-all"
            >
              {item.link} →
            </a>
            <p className="leading-relaxed">{item.descr}</p>
          </div>
        ))}
      </article>
      <div className="bg-white absolute w-full h-4/5 md:h-1/2 bottom-0 left-0 right-0 -z-10"></div>
    </Section>
  );
};

export default OurWork;
