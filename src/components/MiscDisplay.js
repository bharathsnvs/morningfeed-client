import React from "react";

function MiscDisplay({ stream }) {
  const allMiscObjects = stream && [
    ...stream[0].contents,
    ...stream[1].contents,
  ];

  const shuffled = allMiscObjects.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 25);
  console.log("Misc to show", selected);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      {stream ? (
        <div>
          <div className="flex justify-center text-center mb-6 mt-10">
            <div
              id="fonts"
              className="text-gray-600 text-lg font-semibold"
            ></div>
          </div>
          <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-0">
              {selected &&
                selected.map((i) => (
                  <a href={i.link} target="_blank">
                    <div className="max-w-sm lg:max-w-4xl h-auto mx-auto py-0 lg:flex md:mb-0 md:pb-0">
                      <div className="bg-white border md:border-none p-4 md:mb-0 md:pb-0 border-gray-400 rounded-md flex">
                        <div className="mb-0 justify-start">
                          <p className="text-xs text-gray-600 flex items-center mb-3 lg:mb-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-orange-700 w-5 h-5 mr-2 pb-1"
                            >
                              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                            </svg>
                            Riveting
                          </p>

                          <div className="text-gray-900 font-bold text-md mb-0 text-left">
                            {i.upvoteRatio
                              ? i.title
                                  .split(" ")
                                  .slice(2)
                                  .reduce(
                                    (acc, x) =>
                                      acc === null ? [x] : [acc, " ", x],
                                    null
                                  )
                              : i.title}
                          </div>
                          {/* <p className="text-gray-700 text-base text-md text-left md:mb-0 md:pb-0">
                            {i.excerpt}
                          </p> */}
                          <div className="items-start pt-4 pb-0 mb-0">
                            <span
                              id="fonts"
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                              #{!i.upvoteRatio ? i.category : "info"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// <div style={{ marginLeft: 15 }}>
//   {stream ? (
//     <Container id="fonts" style={styles.informationBox}>
//       <div style={styles.coloredDiv}>
//         <br  />
//         <List divided relaxed ordered>
//           {selected &&
//             selected.map((item) => (
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
//                     {item.upvoteRatio
//                       ? item.title
//                           .split(" ")
//                           .slice(2)
//                           .reduce(
//                             (acc, x) =>
//                               acc === null ? [x] : [acc, " ", x],
//                             null
//                           )
//                       : item.title}
//                   </p>
//                   {/* {item.upvoteRatio
//                     ? console.log(item.title.split(" ").slice(2))
//                     : null} */}
//                 </List.Header>
//                 <List.Description>
//                   {item.tags ? (
//                     <p>#{item.tags}</p>
//                   ) : (
//                     <a href={item.link} target="_blank">
//                       {item.source}
//                     </a>
//                   )}
//                 </List.Description>
//               </List.Item>
//             ))}
//         </List>

//         <br />
//         <br />
//       </div>
//     </Container>
//   ) : null}
// </div>

export default MiscDisplay;

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
    textTransform: "capitalize",
  },
};
