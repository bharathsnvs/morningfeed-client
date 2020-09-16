import React from "react";
import GridEvents from "./materials/GridEvents";

function EventsContainer({ worldEvents }) {
  const eventsToShow = worldEvents && worldEvents.contents;
  const shuffled = eventsToShow
    .filter((i) => i.category === "worldevents")
    .sort(() => 0.5 - Math.random());
  const selectedEvents = shuffled.slice(0, 9);

  function reduceText(text) {
    var result = text;
    var resultArray = result.split(" ");
    if (resultArray.length > 14) {
      resultArray = resultArray.slice(0, 13);
      result = resultArray.join(" ") + "...";
    }
    return result;
  }
  console.log(selectedEvents && selectedEvents);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div className="flex justify-center mb-6 mt-6">
        <div id="fonts" className="text-gray-500 text-lg font-light">Latest Events</div>
      </div>
      <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {selectedEvents &&
            selectedEvents.map((i) => (
              <a href={i.link} target="_blank">
                <div className="border shadow-lg rounded-md w-full lg:h-40 lg:max-w-4xl  mx-auto p-4 ">
                  <div
                    id="fonts"
                    className="flex justify-between items-center mb-4"
                  >
                    <span className="font-light text-gray-600 text-md">
                      {i.source}
                    </span>
                    <span
                      className={
                        i.upvoteRatio > 0.5
                          ? "font-light text-green-600 text-md"
                          : "font-light text-gray-600 text-md"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 pt-0"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {i.upvoteRatio}
                    </span>
                  </div>
                  <p id="fonts" className="lg:relative hover-trigger text-xl lg:text-lg text-gray-900">
                    {reduceText(i.title)}
                    {/* <div className="hidden lg:absolute hover-target bg-black border border-grey-100 rounded-md  px-4 py-2">
                      <p className="text-white">{i.title}</p>
                    </div> */}
                  </p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default EventsContainer;

// const styles = {
//   eventsBox: {
//     marginTop: 20,
//     marginBottom: 20,
//     // borderStyle: 'none',
//     borderColor: "blue",
//   },
//   subHeader: {
//     fontWeight: 500,
//     fontSize: 30,
//     marginBottom: 20,
//     marginTop: 20,
//   },
// };
