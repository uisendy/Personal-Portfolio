import React from "react";

const header = () => {
  return (
    <div className="h-[100vh] bg-black text-white w-[100vw]">
      <div className="flex flex-col gap-7 justify-center items-start w-[87%] h-[100%] my-0 mx-auto">
        <h1 className=" text-6xl md:text-9xl font-extrabold">Hello!</h1>
        <p className=" text-6xl md:text-9xl font-light italic">
          I'm Sendy Inieke
        </p>
        <small className=" text-sm pb-3 border-b-2 md:text-lg">
          Junior frontEnd Developer | Aspiring Full-stack Developer
        </small>
        <div className=" text-center h-px w-5rem md:w-[10rem] bg-white origin-top-right rotate-90 absolute top-[98%] right-2/4 md:left-[87%]">
          Scroll down
        </div>
      </div>
    </div>
  );
};

export default header;
