import React from "react";

import DisplayFin from "./DisplayFin";

function FinNews({ stream }) {
  console.log("FINANCE", stream);
  const bstandard = stream && stream[0].contents;
  const redditFin =
    stream && stream[3].contents.filter((i) => i.category === "finance");
  return (
    <div>
      {stream ? (
        <div>
          <div className="flex justify-center mb-6 mt-10">
            <div id="fonts" className="text-gray-600 text-lg font-semibold">
              Market trends
            </div>
          </div>
          <DisplayFin toDisplay={[stream[1], stream[2]]} />
          <div className="flex justify-center mb-6 mt-6">
            <div id="fonts" className="text-gray-600 text-lg font-semibold">
              Latest in Finance
            </div>
          </div>
          <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-0">
              {redditFin &&
                redditFin.slice(0, 10).map((i) => (
                  <a href={i.link} target="_blank">
                    <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                      <div className="bg-white border-r border-b border-l border-t pr-5 pt-5 pl-5 pb-2 md:border-none md:mb-0  border-gray-400 lg:border-gray-400 rounded-md lg:rounded-md flex flex-col justify-between leading-normal">
                        <div className="mb-2 justify-start">
                          <p className="text-xs text-gray-600 flex items-center mb-3 lg:mb-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-blue-900 w-5 h-5 mr-2"
                              v
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Global Finance
                          </p>

                          <div className="text-gray-900 font-bold text-md mb- text-left">
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
      ) : null}
      {stream ? (
        <div>
          <div className="flex justify-center mb-6 mt-10">
            <div id="fonts" className="text-gray-600 text-lg font-semibold">
              Business Standard
            </div>
          </div>
          <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-0">
              {bstandard &&
                bstandard.map((i) => (
                  <a href={i.link} target="_blank">
                    <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                      <div className="bg-white border-r border-b border-l border-t pr-5 pt-5 pl-5 pb-2 md:border-none md:mb-0  border-gray-400 lg:border-gray-400 rounded-md lg:rounded-md flex flex-col justify-between leading-normal">
                        <div className="mb-2 justify-start">
                          <p className="text-xs text-gray-600 flex items-center mb-3 lg:mb-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-gray-700 w-5 h-5 mr-2"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Business Standard
                          </p>
                          {/* <div className="border-b w-full mt-3 rounded-md"></div> */}
                          <div className="text-gray-900 font-bold text-md mb- text-left">
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
      ) : null}
      {/* {stream ? (
        <Container id="fonts" style={styles.informationBox}>
          <div id="fonts" style={styles.subHeader}>
            World Finance
            <span
              // onClick={() => changeView("misc")}

              style={{
                marginBottom: 0,

                marginTop: 5,
                float: "right",
                color: "gray",
                fontSize: 22,
              }}
            >
              from: business standard, ET, FT, reddit
            </span>
          </div>
          <div style={styles.coloredDiv}>
            <List divided relaxed ordered>
              {redditFin &&
                redditFin.slice(0, 10).map((item) => (
                  <List.Item
                    style={styles.contentLabel}
                    id="fonts"
                    style={styles.contents}
                  >
                    <List.Header
                      id="fonts"
                      as="a"
                      href={item.link}
                      target="_blank"
                    >
                      <p id="fonts" style={styles.textColor}>
                        {item.title}
                      </p>
                    </List.Header>
                  </List.Item>
                ))}
            </List>
            <br />
          </div>
          <br />

          <div id="fonts" style={styles.subHeader}>
            Business Standard
          </div>
          <div style={styles.coloredDiv}>
            <List divided relaxed ordered>
              {bstandard &&
                bstandard.map((item) => (
                  <List.Item
                    style={styles.contentLabel}
                    id="fonts"
                    style={styles.contents}
                  >
                    <List.Header
                      id="fonts"
                      as="a"
                      href={item.link}
                      target="_blank"
                    >
                      <p id="fonts" style={styles.textColor}>
                        {item.title}
                      </p>
                    </List.Header>
                  </List.Item>
                ))}
            </List>
            <br />
          </div>
        </Container>
      ) : null} */}
    </div>
  );
}

export default FinNews;

const styles = {
  header: {
    fontWeight: 700,
    fontSize: 40,
  },
  subHeader: {
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  informationBox: {
    width: "100%",
    height: "auto",
    marginLeft: 15,
  },
  contents: {
    marginBottom: 6,
    fontSize: 16,
  },

  coloredDiv: {
    borderRadius: 4,
    padding: 6,
    backgroundColor: "#f6fbff",
  },
  textColor: {
    color: "#082942",
  },
};
