import Navigation from "../components/Navigation/Navigation";
import video from "/src/assets/video/heroBack.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden p-6 items-center">
      <Navigation />
      <h2 className="text-[36px] md:text-[84px] text-white font-playfair font-bold text-center opacity-85 h-full flex items-center max-w-[1200px]">
        Designing Virtual Bridges
        <br />
        for Tomorrow's Digital Skyline
      </h2>
      <video
        className=" brightness-[.5] h-screen w-full object-cover absolute left-1/2 -translate-x-1/2 top-0 -z-10"
        autoPlay
        loop
        muted
        src={video}
      >
        <source type="video/mp4" />
      </video>
      <div className="text-white text-xs font-thin w-full flex justify-end wide antialiased pb-10 z-10">
        <p className="max-w-[200px] mx-4">
          At IWAN, we pioneer in cutting-edge web design and high-end
          development. We're not merely building websites; we're crafting
          digital masterpieces that propel business owners to new heights.
        </p>
        <p className="max-w-[200px] mx-4">
          Our mission is to weave your business story into the digital frontier,
          transforming you from a market player into a game changer.
        </p>
      </div>
      <div className=" min-h-40 absolute bottom-0 w-full bg-gradient-to-b from-transparent to-slate-950"></div>
    </div>
  );
};

export default Hero;
