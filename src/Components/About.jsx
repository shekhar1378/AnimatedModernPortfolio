import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 rounded-2xl  p-1 flex">
      <div className="w-full mt-32 flex flex-start px-14">
        <div>
          <h1 className="flex items-start capitalization text-[1.8vw] leading-[3.5vw]  tracking-wide font-['NeueMontreal-Regular']">
            Hey, I'm
          </h1>
          <h1 className="flex items-start tracking-wide capitalization text-[4vw] leading-[3.5vw]   font-['NeueMontreal-LightItalic'] font-bold  py-2">
            Chandra Shekhar Maurya,
          </h1>
          <h1 className="flex items-start capitalization text-[1.2vw]  font-['NeueMontreal-regular'] mb-4 tracking-wide py-2">
          and I'm a Frontend Developer. My passion is to create<br/>and develop a clean UI/UX for my users.
          </h1>
          <h1 className="flex items-start capitalization text-[1.2vw]  font-['NeueMontreal-regular'] tracking-wide">
          My main stack currently is React/Next.js in combination with<br/>Tailwind CSS and TypeScript.
          </h1>
        </div>
      </div>
      <div className="w-full h-[70vh] mt-32 px-14 flex flex-start ">
        <div className=" overflow-hidden">
              <img src="/src/assets/person.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
