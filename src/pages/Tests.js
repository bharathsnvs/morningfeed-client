import React from "react";

function Tests() {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="py-10 lg:py-10">
      {data.map((i) => (
        <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex">
          <div className="border-r border-b border-l border-t  border-gray-400 lg:border-gray-400 bg-white rounded-b-sm  lg:rounded-r-sm lg:rounded-l-sm p-5 flex flex-col justify-between leading-normal">
            <div className="mb-8 justify-start">
              <p className="text-xs text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-2 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="mb-3 text-xs text-left text-green-400 lg:text-teal-600 font-semibold">
                Item no. {i}
              </div>
              <div className="text-gray-900 font-bold text-md mb-2 text-left">
                Can coffee make you a better developer?
              </div>
              <p className="text-gray-700 text-base text-md text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="h-10 w-10 mr-3 rounded-full"
                src="https://source.unsplash.com/SYTO3xs06fU/"
                alt="display"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Author name</p>
                <p className="text-gray-700 text-left">Aug 19</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mb-8 mt-5">
        <button className="inline-block  bg-blue-400 hover:bg-blue-500 text-white px-5 py-3 text-sm rounded-full shadow-xs font-bold">
          Tweet now
        </button>
      </div>
    </div>
  );
}

const styles = {};

export default Tests;
