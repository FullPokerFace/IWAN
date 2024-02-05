import Footer from "./sections/Footer";
import GetInTouch from "./sections/GetInTouch";
import Hero from "./sections/Hero";
import OurStory from "./sections/OurStory";
import OurWork from "./sections/OurWork";
import WhatWeDo from "./sections/WhatWeDo";

function App() {
  return (
    <>
      <main className="">
        <Hero />
        <OurWork />
        <WhatWeDo />
        <OurStory />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}

export default App;
