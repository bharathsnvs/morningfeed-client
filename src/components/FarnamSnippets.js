import React, { useState } from "react";

import ShareBox from './materials/ShareBox'

function FarnamSnippets({ stream }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [openShares, setOpenShares] = useState(false);

  function handleClick(key) {
    // const newIndex = activeIndex === key ? -1 : key;
    if (key === "close") {
      setOpenModal(false);
      setActiveIndex("none");
    } else {
      setOpenModal(true);
      setActiveIndex(key);
    }

    console.log("Active Index", key);
    console.log(openModal);
  }
  return (
    <div>
      <div>
        {stream ? (
          <div>
            <div>
              <div className="flex justify-center mb-6 mt-10">
                <div id="fonts" className="text-gray-600 text-lg font-semibold">
                  Articles from Blogs that matter
                </div>
              </div>
              <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
                <div className="grid grid-cols-1 gap-1 ">
                  {stream &&
                    stream.contents.map((i, key) => (
                      <div>
                        <div className="cursor-pointer" key={i.category}>
                          <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-1 lg:flex md:mb-0">
                            <div className="bg-white pr-3 pt-3 pl-3 pb-2 md:border-none md:mb-0  border-gray-400 lg:border-gray-400 rounded-md lg:rounded-md flex flex-col justify-between leading-normal">
                              <div className="flex justify-between items-center mt-4">
                                <div className="flex items-start px-2 md:px-2 pb-2">
                                  <span
                                    id="fonts"
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                  >
                                    <p>#{i.category}</p>
                                  </span>
                                  <a
                                    id="fonts"
                                    href={i.link}
                                    target="_blank"
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                  >
                                    <p>
                                      Go to source{" "}
                                      <span className="pt-3">➶</span>
                                    </p>
                                  </a>
                                </div>

                                <div>
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
                                </div>
                              </div>
                              {/* SHARING SECTION */}
                              <div>
                                <ShareBox openShares={openShares} linkToRoute={i.link} articleTitle={i.title} />
                              </div>

                              <div className="mb-4 justify-start">
                                <div className="text-gray-900 flex items-center font-bold text-xl md:text-3xl text-left">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-blue-500 w-5 h-5 mr-2 ml-0 pl-0"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                  {i.title}
                                </div>
                                <div>
                                  <p className="text-gray-700 text-base text-md text-left md:mb-0 md:pb-0">
                                    {i.article
                                      .split("\n\n")
                                      .map((paragraph) => (
                                        <p>
                                          {paragraph
                                            .split("\n")
                                            .reduce((total, line) => [
                                              total,
                                              <br />,
                                              <br />,
                                              line,
                                            ])}
                                        </p>
                                      ))}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* {openModal ? (
                              <div className="modal pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
                                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

                                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                  <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                                    <svg
                                      className="fill-current text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                    >
                                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                    </svg>
                                    <span className="text-sm">(Esc)</span>
                                  </div>

                                  <div className="modal-content py-4 text-left px-6">
                                    <div className="flex justify-between items-center pb-3">
                                      <p
                                        id="fonts"
                                        className="text-2xl font-bold"
                                      >
                                        {
                                          stream.contents.filter(
                                            (i) => i.category === activeIndex
                                          ).title
                                        }
                                      </p>
                                      <div onClick={() => handleClick("close")} className="modal-close cursor-pointer z-50">
                                        <svg
                                          className="fill-current text-black"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                        </svg>
                                      </div>
                                    </div>

                                    <p>Modal content can go here</p>
                                    <p>...</p>
                                    <p>...</p>
                                    <p>...</p>
                                    <p>...</p>

                                    <div className="flex justify-end pt-2">
                                      <button className="px-4 bg-transparent p-3 rounded-lg text-gray-800 lg:hover:bg-gray-100 lg:hover:text-blue-400 mr-2">
                                        Action
                                      </button>
                                      <button
                                        id="fonts"
                                        onClick={() => handleClick("close")}
                                        className="modal-close px-4 bg-gray-800 p-3 rounded-lg text-white lg:hover:bg-blue-400"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null} */}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* <Container id="fonts" style={styles.informationBox}>
          <br />

          <List divided relaxed>
            <Accordion>
              <List.Item
                style={styles.contentLabel}
                id="fonts"
                style={styles.contents}
              >
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" style={{ display: "inline-block" }} />
                  <List.Header
                    style={{ display: "inline-block" }}
                    id="fonts"
                    as="a"
                    href={stream.contents[0].link}
                    target="_blank"
                  >
                    <p id="fonts" style={styles.textColor}>
                      {stream.contents[0].title}
                    </p>
                  </List.Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <List.Description>
                    <div>
                      {stream.contents[0].article
                        .split("\n\n")
                        .map((paragraph) => (
                          <p>
                            {paragraph
                              .split("\n")
                              .reduce((total, line) => [
                                total,
                                <br />,
                                <br />,
                                line,
                              ])}
                          </p>
                        ))}
                    </div>
                  </List.Description>
                </Accordion.Content>
              </List.Item>
            </Accordion>
          </List>
          <List divided relaxed>
            <Accordion>
              <List.Item
                style={styles.contentLabel}
                id="fonts"
                style={styles.contents}
              >
                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" style={{ display: "inline-block" }} />
                  <List.Header
                    style={{ display: "inline-block" }}
                    id="fonts"
                    as="a"
                    href={stream.contents[1].link}
                    target="_blank"
                  >
                    <p id="fonts" style={styles.textColor}>
                      {stream.contents[1].title}
                    </p>
                  </List.Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <List.Description>
                    <div>
                      {stream.contents[1].article
                        .split("\n\n")
                        .map((paragraph) => (
                          <p>
                            {paragraph
                              .split("\n")
                              .reduce((total, line) => [
                                total,
                                <br />,
                                <br />,
                                line,
                              ])}
                          </p>
                        ))}
                    </div>
                  </List.Description>
                </Accordion.Content>
              </List.Item>
            </Accordion>
          </List>
          <List divided relaxed>
            <Accordion>
              <List.Item
                style={styles.contentLabel}
                id="fonts"
                style={styles.contents}
              >
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" style={{ display: "inline-block" }} />
                  <List.Header
                    style={{ display: "inline-block" }}
                    id="fonts"
                    as="a"
                    href={stream.contents[2].link}
                    target="_blank"
                  >
                    <p id="fonts" style={styles.textColor}>
                      {stream.contents[2].title}
                    </p>
                  </List.Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <List.Description>
                    <div>
                      {stream.contents[2].article
                        .split("\n\n")
                        .map((paragraph) => (
                          <p>
                            {paragraph
                              .split("\n")
                              .reduce((total, line) => [
                                total,
                                <br />,
                                <br />,
                                line,
                              ])}
                          </p>
                        ))}
                    </div>
                  </List.Description>
                </Accordion.Content>
              </List.Item>
            </Accordion>
          </List>
          <List divided relaxed>
            <Accordion>
              <List.Item
                style={styles.contentLabel}
                id="fonts"
                style={styles.contents}
              >
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" style={{ display: "inline-block" }} />
                  <List.Header
                    style={{ display: "inline-block" }}
                    id="fonts"
                    as="a"
                    href={stream.contents[3].link}
                    target="_blank"
                  >
                    <p id="fonts" style={styles.textColor}>
                      {stream.contents[3].title}
                    </p>
                  </List.Header>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <List.Description>
                    <div>
                      {stream.contents[3].article
                        .split("\n\n")
                        .map((paragraph) => (
                          <p>
                            {paragraph
                              .split("\n")
                              .reduce((total, line) => [
                                total,
                                <br />,
                                <br />,
                                line,
                              ])}
                          </p>
                        ))}
                    </div>
                  </List.Description>
                </Accordion.Content>
              </List.Item>
            </Accordion>
          </List>
        </Container> */}
    </div>
  );
}

export default FarnamSnippets;

const styles = {
  header: {
    fontWeight: 700,
    fontSize: 50,
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
    fontSize: 30,
  },
};
