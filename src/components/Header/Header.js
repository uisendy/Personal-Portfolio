import React from "react";

const header = () => {
  return (
    <div className="h-[83.5vh] bg-black text-white w-[100vw]">
      <div className="flex flex-col gap-7 justify-center items-start w-[87%] h-[100%] my-0 mx-auto">
        <h1 className=" text-7xl italic md:not-italic md:text-9xl font-extrabold ">
          Hi. I'm Sendy
        </h1>
        <p className=" text-3xl border-t-[1px] pt-5 md:text-9xl font-light italic md:border-t-0 md:pt-0">
          A software Developer
        </p>
        <div className=" text-center h-px w-5rem md:w-[10rem] bg-white origin-top-right rotate-90 absolute top-[98%] right-2/4 md:left-[87%]">
          Scroll down
        </div>
      </div>
    </div>
  );
};

export default header;
