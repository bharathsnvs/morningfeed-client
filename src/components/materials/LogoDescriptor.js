import React from "react";

function LogoDescriptor() {
  return (
    <div>
      <div className="hidden sm:flex sm:items-center mb-0 ">
        <img
          className="h-20 w-20 rounded-md mr-4"
          src={require("../../assets/fractal1.svg")}
          alt=""
        />
        <p
          id="fonts"
          className="p-4 w-auto mx-auto text-gray-600 text-xl lg:text-lg shadow-sm"
        >
          <span className="text-blue-900 font-semibold">Morningfeed</span> is
          your personal tool that scours the internet for interesting and
          relevant information. It lets you stay updated with everything, from
          world events to interesting articles. All from a{" "}
          <span className="font-semibold">single</span> place.
        </p>
      </div>
      <div className="flex justify-center mb-0 visible sm:invisible ">
        <img
          className="h-20 w-20 rounded-md"
          src={require("../../assets/fractal1.svg")}
          alt=""
        />
      </div>
      <div className="flex justify-center mb-1 sm:hidden ">
        <p
          id="fonts"
          className="p-5 w-full text-center text-gray-600 text-lg shadow-sm"
        >
          <span className="text-blue-900 font-semibold">Morningfeed</span> is
          your personal tool that scours the internet for interesting and
          relevant information. It lets you stay updated with everything, from
          world events to interesting articles. All from a{" "}
          <span className="font-semibold">single</span> place.
        </p>
      </div>
    </div>
  );
}

export default LogoDescriptor;
