import React from "react";

function TechNews({ stream }) {
  console.log("TECH", stream);
  return (
    <div>
      {stream ? (
        <div>
          <div>
            <div className="flex justify-center mb-6 mt-10">
              <div id="fonts" className="text-gray-600 text-lg font-semibold">
                World Tech
              </div>
            </div>
            <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-0">
                {stream &&
                  stream[1].contents.map((i) => (
                    <a href={i.link} target="_blank">
                      <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                        <div className="bg-white border-r border-b border-l border-t pr-5 pt-5 pl-5 pb-2 md:border-none md:mb-0  border-gray-400 lg:border-gray-400 rounded-md lg:rounded-md flex flex-col justify-between leading-normal">
                          <div className="mb-2 justify-start">
                            <p className="text-xs text-gray-600 flex items-center mb-3 lg:mb-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-blue-500 w-5 h-5 mr-2"
                              >
                                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                              </svg>
                              All things tech
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
            <div className="flex justify-center mb-6 mt-10">
              <div id="fonts" className="text-gray-600 text-lg font-semibold">
                Hacker News
              </div>
            </div>
            <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-1 md:gap-2 md:mb-0">
                {stream &&
                  stream[0].contents.map((i) => (
                    <a href={i.link} target="_blank">
                      <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                        <div className="border-r border-b border-l border-t p-5 md:border-none md:mb-0  border-gray-400 lg:border-gray-400 bg-white rounded-md  lg:rounded-md flex flex-col justify-between leading-normal">
                          <div className="mb-0 justify-start">
                            <p className="text-xs text-gray-600 flex items-center mb-3 lg:mb-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-orange-600 w-5 h-5 mr-2"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Hacker News
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
        </div>
      ) : null}
    </div>
    // <div>
    //   <div style={{ marginLeft: 15 }}>
    //     {stream ? (
    //       <Container id="fonts" style={styles.informationBox}>
    //         <div id="fonts" style={styles.subHeader}>
    //           Reuters Tech
    //         </div>
    //         <div style={styles.coloredDiv}>
    //           <List divided relaxed ordered>
    //             {stream
    //               ? stream[1].contents.map((item) => (
    //                   <List.Item
    //                     style={styles.contentLabel}
    //                     id="fonts"
    //                     style={styles.contents}
    //                   >
    //                     <List.Header
    //                       id="fonts"
    //                       as="a"
    //                       href={item.link}
    //                       target="_blank"
    //                     >
    //                       <p id="fonts" style={styles.textColor}>
    //                         {item.title}
    //                       </p>
    //                     </List.Header>
    //                     <List.Description>{item.excerpt}</List.Description>
    //                   </List.Item>
    //                 ))
    //               : null}
    //           </List>
    //           <br />
    //         </div>
    //         <br />

    //         <div id="fonts" style={styles.subHeader}>
    //           Hacker News
    //         </div>
    //         <div style={styles.coloredDiv}>
    //           <List divided relaxed ordered>
    //             {stream &&
    //               stream[0].contents.map((item) => (
    //                 <List.Item
    //                   style={styles.contentLabel}
    //                   id="fonts"
    //                   style={styles.contents}
    //                 >
    //                   <List.Header
    //                     id="fonts"
    //                     as="a"
    //                     href={item.link}
    //                     target="_blank"
    //                   >
    //                     <p id="fonts" style={styles.textColor}>
    //                       {item.title}
    //                     </p>
    //                   </List.Header>
    //                 </List.Item>
    //               ))}
    //           </List>
    //           <br />
    //         </div>
    //       </Container>
    //     ) : null}
    //   </div>
    // </div>
  );
}

export default TechNews;

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
    marginTop: 0,
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
