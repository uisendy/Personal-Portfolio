import React from "react";

const header = () => {
  return (
    <section
      data-scroll-section
      className="h-[83.5vh] bg-black text-white w-[100vw]"
    >
      <div className="flex flex-col gap-2 md:gap-0 justify-start pt-12 items-start w-[70%] h-[100%] my-0 mx-auto ">
        <h1 className=" text-7xl italic md:not-italic md:text-9xl font-extrabold ">
          Hi. I'm Sendy
        </h1>
        <p className=" text-3xl border-t-[1px] pt-5 md:text-8xl font-light italic md:border-t-0 md:pt-0">
          A software Developer
        </p>
        <p className=" uppercase font-montserrat text-left text-sm absolute top-[78%] left-[60%] w-[32%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          eligendi, corrupti deserunt libero doloremque nihil! Illum illo,
          officia impedit repellat enim tempora dolore iste non dolorum nostrum
          omnis sed ad vero, in incidunt corrupti necessitatibus rerum. Possimus
          unde sint perspiciatis?
        </p>
        <div className=" text-center h-px w-5rem md:w-[10rem] bg-white origin-top-right rotate-90 absolute top-[98%] right-2/4 md:left-[87%]">
          Scroll down
        </div>
      </div>
    </section>
  );
};

export default header;
