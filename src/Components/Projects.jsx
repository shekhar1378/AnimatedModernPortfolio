import React from "react";

const Projects = () => {
  return (
    <div className="w-full bg-zinc-900 rounded-2xl p-1 flex flex-col">
      <div className='w-full mt-40 px-14  font-["NeueMontreal-Regular"]'>
        <div className="py-20">
          <h1 className="text-[6vw] leading-[6vw]">Creating next level</h1>
          <h1 className="text-[6vw] leading-[6vw]">digital products</h1>
        </div>
      </div>

      <div className="px-14 grid grid-cols-2 gap-10 ">
        {/* First row */}
        <div className="grid grid-cols-1 gap-10">
          <div className="py-6">
            <div className=" bg-zinc-300 ">
              <img
                src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col py-4">
              <h4 className='text-[3vw]  font-["NeueMontreal-Regular"]'>
                Twice
              </h4>
              <div className="w-full my-4 border-b-2 border-zinc-800"></div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <p className="text-[1.2vw] font-light">
                    Intrection & Development
                  </p>
                </div>
                <div>
                  <p className="flex text-[1.2vw] font-light">2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6">
            <div className=" bg-zinc-300 ">
              <img
                src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col py-4">
              <h4 className='text-[3vw]  font-["NeueMontreal-Regular"]'>
                Twice
              </h4>
              <div className="w-full my-4 border-b-2 border-zinc-800"></div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <p className="text-[1.2vw] font-light">
                    Intrection & Development
                  </p>
                </div>
                <div>
                  <p className="flex text-[1.2vw] font-light">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="grid grid-cols-1 gap-10">
        <div className="py-6">
            <div className=" bg-zinc-300 ">
              <img
                src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col py-4">
              <h4 className='text-[3vw]  font-["NeueMontreal-Regular"]'>
                Twice
              </h4>
              <div className="w-full my-4 border-b-2 border-zinc-800"></div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <p className="text-[1.2vw] font-light">
                    Intrection & Development
                  </p>
                </div>
                <div>
                  <p className="flex text-[1.2vw] font-light">2024</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='h-[70vh] bg-zinc-300'></div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
