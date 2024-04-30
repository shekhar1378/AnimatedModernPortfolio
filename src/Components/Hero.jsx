import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen  bg-zinc-900 p-0.5 ">
      <div className="mt-32 px-14 flex items-start">
        <div>
          {["Front-End", "React", "Developer"].map((items, index) => {
            return (
              <div className="masker  ">
                <div className="flex w-fit items-center ">
                  {index === 1 && (
                    <div className="mr-1 -mb-1 rounded-md w-[7vw] h-[5vw]  flex">
                      <div className="flex items-center">
                        <img
                          width={82}
                          height={82}
                          src="src/assets/react.png"
                          className="bg-cover "
                          alt="image"
                        />
                      </div>
                    </div>
                  )}
                  <h1
                    key={index}
                    className="flex items-center uppercase text-[7vw] leading-[6.5vw]  tracking-tight font-['NeueMontreal-Bold']"
                  >
                    {items}
                  </h1>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
      
      {/* <div className=" py-1 px-14">
          {" "}
          <p>
            Hi, I'm Chandra Shekhar Maurya. A passionate Front-end
            <br />
            React Developer based in India. 📍
          </p>{" "}
        </div>  */}
      
      { <div className="w-full px-14 mt-14 flex flex-col  border-t-[1px] border-zinc-700">
        <div className="text-[2vw] font-bold mt-8  flex items-center gap-4">
          <div className="flex gap-4">
          <h1>Tect Stack</h1><div  className="border-r-2 border-zinc-300  ">  </div>
          </div>
          <div className="flex">
            <ul className="flex gap-4">
                <li><img src="https://skillicons.dev/icons?i=html" /></li>
                <li><img src="https://skillicons.dev/icons?i=css" /></li>
                <li><img src="https://skillicons.dev/icons?i=javascript" /></li>
                <li><img src="https://skillicons.dev/icons?i=typescript" /></li>
                <li><img src="https://skillicons.dev/icons?i=react" /></li>
                <li><img src="https://skillicons.dev/icons?i=redux" /></li>
                <li><img src="https://skillicons.dev/icons?i=nextjs" /></li>
                <li><img src="https://skillicons.dev/icons?i=tailwind" /></li>
                <li><img src="https://skillicons.dev/icons?i=sass" /></li>
                <li><img src="https://skillicons.dev/icons?i=git" /></li>
                <li><img src="https://skillicons.dev/icons?i=github" /></li>
                
            </ul>
          </div>
        </div>
      </div> }
    </div>
  );
};

export default Hero;
