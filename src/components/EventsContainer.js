import React, { useEffect, useState } from "react";
import GridEvents from "./materials/GridEvents";

function EventsContainer({ worldEvents }) {
  const [eventsfeed, setEventsFeed] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState(null);
  useEffect(() => {
    // const eventsToShow = worldEvents && worldEvents.contents;
    const shuffled =
      worldEvents && worldEvents.contents.sort(() => 0.5 - Math.random());
    // const selectedEvents = shuffled.slice(0, 9);
    setEventsFeed(shuffled.slice(0, 9));
  }, []);

  function handleModal(objectInformation) {
    console.log(objectInformation);
    setModalText(objectInformation);
    setOpen(true);
  }

  function handleCloseModal() {
    setModalText(null);
    setOpen(false);
    console.log("Should clode", modalText);
  }

  function reduceText(text) {
    var result = text;
    var resultArray = result.split(" ");
    if (resultArray.length > 14) {
      resultArray = resultArray.slice(0, 13);
      result = resultArray.join(" ") + "...";
    }
    return result;
  }

  return (
    <div>
      <div className="flex justify-center mb-6 mt-10">
        <div id="fonts" className="text-gray-600 text-lg font-semibold">
          Latest Events
        </div>
      </div>
      <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {eventsfeed &&
            eventsfeed.map((i) => (
              <div className="border shadow-lg rounded-md w-full lg:h-40 lg:max-w-4xl  mx-auto p-4 ">
                {!open ? (
                  <div>
                    <div
                      id="fonts"
                      className="flex justify-between items-center mb-2"
                    >
                      <span className="font-light text-gray-600 text-md ">
                        #{i.category}
                      </span>
                    </div>
                    <a href={i.link} target="_blank">
                      <p
                        id="fonts"
                        className="lg:relative hover-trigger text-xl font-bold lg:text-lg text-gray-900"
                      >
                        {reduceText(i.title)}
                        {/* <div className="hidden lg:absolute hover-target bg-black border border-grey-100 rounded-md  px-4 py-2">
                      <p className="text-white">{i.title}</p>
                    </div> */}
                      </p>
                    </a>
                    <div
                      onClick={() =>
                        handleModal({
                          title: i.title,
                          excerpt: i.excerpt,
                          category: i.category,
                          link: i.link,
                        })
                      }
                      id="fonts"
                      className="text-lg font-light lg:text-lg text-gray-600 mt-4 cursor-pointer"
                    >
                      Read more
                    </div>
                  </div>
                ) : null}
                {/* MODAL CONTENTS */}
                {open ? (
                  <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    <div className="modal-overlay absolute w-full h-full bg-gray-800 opacity-50"></div>

                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                      <div
                        onClick={() => handleCloseModal()}
                        className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
                      >
                        <svg
                          className="fill-current text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                        >
                          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                      </div>

                      <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                          <p
                            id="fonts"
                            className=" pt-2 text-xl font-bold lg:text-lg text-gray-900"
                          >
                            {modalText.title}
                          </p>
                        </div>

                        <p className="text-lg font-light lg:text-lg text-gray-600 mt-4">
                          {modalText.excerpt}
                        </p>

                        <div className="flex justify-end pt-2">
                          <div
                            id="fonts"
                            onClick={() => handleCloseModal()}
                            className="px-3 p-3 text-gray-600 font-semibold cursor-pointer"
                          >
                            Read full
                          </div>
                          <div
                            id="fonts"
                            onClick={() => handleCloseModal()}
                            className="px-3 bg-gray-800 p-3 rounded-lg text-white cursor-pointer"
                          >
                            Close
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
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
