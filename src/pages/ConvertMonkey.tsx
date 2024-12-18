import Heading7 from "../components/Headings/Heading7";
// import Heading3 from "../components/Headings/Heading3";
import Section from "../components/Section/Section";
import flag from "../assets/flag.svg";
import logoWithSlogan from "../assets/logoWithSlogan.svg";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import cv_video from "../assets/video/cv_video.mov";
import cm_screen1 from "../assets/images/cm_screen_1.png";
import cm_screen2 from "../assets/images/cm_screen_3.png";
import cm_screen3 from "../assets/images/cm_screen_2.png";

const ConvertMonkeyPage = () => {
  return (
    <Section className="pt-32 md:pt-40">
      <img src={logoWithSlogan} className="cursor-pointer w-full h-28 mb-12" />
      <Heading7>
        ConvertMonkey - Convert & import vector files to Figma
      </Heading7>
      <div className="flex justify-center items-center gap-2 my-6">
        Made with love in USA
        <img src={flag} className="cursor-pointer w-5 h-5" />
        by Island Web Apps
      </div>

      <div className="mt-10 max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          Hey there! We're passionate about vector files, and we bet you are
          too! That's why we created ConvertMonkey - a powerful Figma plugin
          that makes importing your vector files a breeze. Whether you're
          working with EPS, AI, or other vector formats, we've got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <div className="bg-gray-200 rounded-lg  flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-lg"
              controls
            >
              <source src={cv_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">What ConvertMonkey Does:</h3>
            <ul className="space-y-3">
              <li>
                🚀 Converts vector files directly into Figma-ready formats
              </li>
              <li>💫 Preserves all vector data with pixel-perfect accuracy</li>
              <li>🎨 Maintains original colors, gradients, and effects</li>
              <li>⚡ Lightning-fast batch processing</li>
              <li>🛠️ Simple drag-and-drop interface</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8 text-sky-900">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img src={cm_screen1} className="bg-gray-200 rounded-lg mb-4" />
            <h4 className="font-bold mb-2">Easy Import</h4>
            <p>
              Drag and drop your files and let ConvertMonkey handle the rest
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <img src={cm_screen2} className="bg-gray-200 rounded-lg mb-4" />
            <h4 className="font-bold mb-2">Perfect Conversion</h4>
            <p>Every curve and point preserved exactly as intended</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <img src={cm_screen3} className="bg-gray-200 rounded-lg mb-4" />
            <h4 className="font-bold mb-2">Batch Processing</h4>
            <p>Convert multiple files at once to save time</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-20 ">
          {/* <Heading3>Simple Pricing</Heading3> */}
          <div className="py-10 rounded-lg max-w-xl ">
            {/* <div className="text-4xl font-bold text-blue-600">$3/month</div>
            <p className="mt-4 text-lg text-left mb-10">
              Unlimited vector file conversions. Convert unlimited EPS files,
              batch processing, premium support and regular updates.
            </p> */}
            <PrimaryButton
              href="https://www.figma.com/community/plugin/your-plugin-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started on Figma Store
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ConvertMonkeyPage;
