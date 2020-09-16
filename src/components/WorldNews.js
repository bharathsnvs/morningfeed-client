import React, { useState } from "react";
import ShareBox from './materials/ShareBox'
import EventsContainer from "./EventsContainer";

function WorldNews({ stream, worldEvents }) {
  const [sortNews, setSortNews] = useState("all");
  const [openShares, setOpenShares] = useState(false);
  const [open, setOpen] = useState(false);
  const indiaSpecific =
    stream && stream.contents.filter((i) => i.location === "top-news");
  const worldSpecific =
    stream && stream.contents.filter((i) => i.location === "world");
  console.log(indiaSpecific && indiaSpecific);

  function handleSelection(text) {
    setSortNews(text);
    setOpen(false);
  }

  const NewsWorld = () => {
    return (
      <div>
        <div className="flex justify-center mb-6 mt-10">
          <div id="fonts" className="text-gray-600 text-lg font-semibold">
            World News
          </div>
        </div>
        <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3">
            {worldSpecific &&
              worldSpecific.map((i) =>
                i.excerpt === "Nil" ? (
                  <a href={i.link} target="_blank">
                    <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                      <div className="bg-gray-900 pr-5 pt-5 pl-5 pb-2 md:mb-0  border-gray-400 lg:border-gray-400 rounded-md lg:rounded-md flex flex-col justify-between leading-normal">
                        <div className="mb-2 justify-start">
                          <p className="text-xs text-gray-100 flex items-center mb-3 lg:mb-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-yellow-500 w-5 h-5 mr-2"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Reuters-World
                          </p>

                          <div className="text-gray-100 font-bold text-md mb- text-left">
                            {i.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <a href={i.link} target="_blank">
                    <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                      <div className="border-r border-b border-l border-t p-5 md:border-none md:p-2 md:mb-0  border-gray-400 lg:border-gray-400 bg-white rounded-md  lg:rounded-md flex flex-col justify-between leading-normal">
                        <div className="mb-2 justify-start">
                          <p className="text-xs text-gray-600 flex items-center mb-3 lg:mb-5">
                            <svg
                              className="text-gray-800 w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                            World News
                          </p>

                          <div className="text-gray-900 font-bold text-md mb-2 text-left">
                            {i.title}
                          </div>
                          <p className="text-gray-700 text-base text-md text-left md:mb-0 md:pb-0">
                            {i.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              )}
          </div>
        </div>
      </div>
    );
  };

  const NewsIndia = () => {
    return (
      <div>
        <div className="flex justify-center mb-6 mt-10">
          <div id="fonts" className="text-gray-600 text-lg font-semibold">
            India
          </div>
        </div>
        <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3">
            {indiaSpecific &&
              indiaSpecific.slice(-2).map((i) => (
                <a href={i.link} target="_blank">
                  <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                    <div className="bg-gray-900 pr-5 pt-5 pl-5 pb-2 md:border-none md:mb-0  border-gray-400 lg:border-gray-400 rounded-md lg:rounded-md flex flex-col justify-between leading-normal">
                      <div className="mb-2 justify-start">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xs text-gray-100 flex items-center mb-3 lg:mb-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-yellow-500 w-5 h-5 mr-2"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Reuters-India
                            </p>
                          </div>
                          {/* <div>
                            <span
                              id="fonts"
                              onClick={() => setOpenShares(!openShares)}
                              className="cursor-pointer flex justify-start pt-0 pb-3 text-md font-semibold text-gray-700 mr-4"
                            >
                              <p className="flex justify-start">
                                {!openShares ? (
                                  <p className="flex justify-start hover:text-gray-900 hover:underline ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="text-blue-500 w-5 h-5 mr-2"
                                    >
                                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                    </svg>{" "}
                                    Share!
                                  </p>
                                ) : (
                                  <span
                                    onClick={() => setOpenShares(false)}
                                    className="cursor-pointer"
                                  >
                                    Close
                                  </span>
                                )}
                              </p>
                            </span>
                          </div> */}
                        </div>
                        {/* <div>
                          <ShareBox
                            colorScheme={"Dark"}
                            openShares={openShares}
                            linkToRoute={i.link}
                            articleTitle={i.title}
                          />
                        </div> */}
                        <div className="text-gray-100 font-bold text-md mb- text-left">
                          {i.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
        <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-3">
            {indiaSpecific &&
              indiaSpecific.slice(0, -2).map((i) => (
                <a href={i.link} target="_blank">
                  <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                    <div className="border-r border-b border-l border-t p-5 md:border-none md:p-2 md:mb-0  border-gray-400 lg:border-gray-400 bg-white rounded-md  lg:rounded-md flex flex-col justify-between leading-normal">
                      <div className="mb-2 justify-start">
                        <p className="text-xs text-gray-600 flex items-center mb-3 lg:mb-5">
                          <svg
                            className="text-gray-800 w-5 h-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          Reuters-India
                        </p>

                        <div className="text-gray-900 font-bold text-md mb-2 text-left">
                          {i.title}
                        </div>
                        <p className="text-gray-700 text-base text-md text-left md:mb-0 md:pb-0">
                          {i.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {worldEvents && stream ? (
        <div>
          <EventsContainer worldEvents={worldEvents} />
          <div className="border-b w-full mt-10 rounded-md"></div>
          <div>
            {/* <div className="relative">
              <button
                onClick={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                className="relative flex items-start z-10 rounded-md bg-white p-2 focus:outline-none"
              >
                <span id="fonts" className="inline-block text-gray-800">
                  Sort by:
                </span>
                <svg
                  className="h-5 w-5 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              {open ? (
                <div className="absolute left-0 mt-2 py-1 w-48 bg-gray-100 rounded-md shadow-xl z-20">
                  <div
                    onClick={() => handleSelection("india")}
                    className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-800 hover:text-white"
                  >
                    India
                  </div>
                  <div
                    onClick={() => handleSelection("world")}
                    className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-800 hover:text-white"
                  >
                    World
                  </div>
                  <div
                    onClick={() => handleSelection("all")}
                    className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-800 hover:text-white"
                  >
                    All
                  </div>
                </div>
              ) : null}
            </div> */}
          </div>
          {sortNews === "india" ? <NewsIndia /> : null}

          {sortNews === "world" ? <NewsWorld /> : null}

          {sortNews === "all" ? (
            <div>
              <NewsIndia /> <NewsWorld />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>

    // <div style={{ marginLeft: 15 }}>
    //   {worldEvents && stream ? (
    //     <Container id="fonts" style={styles.informationBox}>
    //       <EventsContainer worldEvents={worldEvents} />

    //       <div id="fonts" style={styles.subHeader}>
    //         India
    //         <span
    //           // onClick={() => changeView("misc")}

    //           style={{
    //             marginBottom: 0,

    //             marginTop: 5,
    //             float: "right",
    //             color: "gray",
    //             fontSize: 22,
    //           }}
    //         >
    //           from: reuters, reddit
    //         </span>
    //       </div>
    //       <div style={styles.coloredDiv}>
    //         <List divided relaxed ordered>
    //           {indiaSpecific &&
    //             indiaSpecific.slice(0, -2).map((item) => (
    //               <List.Item
    //                 style={styles.contentLabel}
    //                 id="fonts"
    //                 style={styles.contents}
    //               >
    //                 <List.Header
    //                   id="fonts"
    //                   as="a"
    //                   href={item.link}
    //                   target="_blank"
    //                 >
    //                   <p id="fonts" style={styles.textColor}>
    //                     {item.title}
    //                   </p>
    //                 </List.Header>
    //                 <List.Description>{item.excerpt}</List.Description>
    //               </List.Item>
    //             ))}
    //         </List>
    //         <br />
    //       </div>
    //       <br />

    //       <div id="fonts" style={styles.subHeader}>
    //         World
    //       </div>
    //       <div style={styles.coloredDiv}>
    //         <List divided relaxed ordered>
    //           {worldSpecific &&
    //             worldSpecific.slice(0, -2).map((item) => (
    //               <List.Item
    //                 style={styles.contentLabel}
    //                 id="fonts"
    //                 style={styles.contents}
    //               >
    //                 <List.Header
    //                   id="fonts"
    //                   as="a"
    //                   href={item.link}
    //                   target="_blank"
    //                 >
    //                   <p id="fonts" style={styles.textColor}>
    //                     {item.title}
    //                   </p>
    //                 </List.Header>
    //                 <List.Description>{item.excerpt}</List.Description>
    //               </List.Item>
    //             ))}
    //         </List>
    //         <br />
    //       </div>
    //       <br />
    //     </Container>
    //   ) : null}
    // </div>
  );
}

export default WorldNews;

// const styles = {
//   header: {
//     fontWeight: 700,
//     fontSize: 40,
//   },
//   subHeader: {
//     fontWeight: 500,
//     fontSize: 30,
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   informationBox: {
//     marginTop: 0,
//     width: "100%",
//     height: "auto",
//     marginLeft: 15,
//   },
//   contents: {
//     marginBottom: 6,
//     fontSize: 16,
//   },

//   coloredDiv: {
//     borderRadius: 4,
//     padding: 6,
//     backgroundColor: "#f6fbff",
//   },
//   textColor: {
//     color: "#082942",
//   },
// };
