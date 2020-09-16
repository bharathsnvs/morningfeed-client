import React, { useState, useEffect } from "react";

function GridEvents({text}) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   const [interval, setInterval] = useState(null)
  // const [renderChild, setRenderChild] = useState(true);

  // useEffect(() => {
  //   let interval = setTimeout(() => {
  //     setRenderChild(false);
  //   }, 5000);
  //   console.log(interval)
  // }, []);
  
  return (
    <div>
      {/* {renderChild ? (
        <div className="flex transition delay-150 max-w-sm lg:max-w-4xl w-full mx-auto bg-white shadow-md rounded-lg mt-0 mb-3 py-1">
          <div className="-mx-3 py-2 px-4">
            <div className="mx-3">
              <span className="text-gray-800 font-semibold">Welcome!</span>
              <p className="text-gray-600 text-sm">
                Consider clicking the{" "}
                <span className="text-teal-700 font-bold">Share</span> button,
                and adding this page to your homescreen. Access the page right
                from your phone screen like an app!
              </p>
            </div>
          </div>
        </div>
      ) : null} */}
      <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {data.map((i) => (
            <div className="border rounded-md max-w-sm lg:max-w-4xl  mx-auto p-4 lg:flex lg:mb-3 ">
              {i}, {text}, Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridEvents;
