import React from "react";

function ArtDisplay({ stream }) {
  const allImages = stream && [...stream[0].contents, ...stream[1].contents];
  console.log("ART to show", allImages);

  const shuffled = allImages.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  return (
    <div>
      <div className="flex justify-center text-center mb-6 mt-10">
        <div id="fonts" className="text-gray-600 text-lg font-semibold">
          Collections from history, architecture, retro-futurism and more
        </div>
      </div>
      <div className="mb-5 p-5 md:p-6 rounded-md grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-5">
        {selected &&
          selected.map((i) => (
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-xs">
                {i.imageUrl ? (
                  <img className="w-full" src={i.imageUrl} alt={i.title} />
                ) : (
                  <div className="w-full h-64 bg-gray-600"></div>
                )}
                <div className="px-4 md:px-5 py-4 flex justify-between items-center mb-0">
                  <a href={i.imageUrl} target="_blank">
                    <span className="font-light text-gray-600 text-md">
                      Source
                    </span>
                  </a>
                  <span
                    className={
                      i.upvoteRatio > 0.5
                        ? "font-light text-green-600 text-md"
                        : "font-light text-gray-600 text-md"
                    }
                  >
                    {/* <svg
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
                  </svg> */}
                    ▲ {i.upvoteRatio}
                  </span>
                </div>
                <a href={i.imageUrl} target="_blank">
                  <div
                    id="fonts"
                    className="px-4 md:px-5 pb-4 font-bold text-xl mb-2"
                  >
                    {i.title}
                  </div>
                </a>
                <div className="px-4 md:px-5 pt-4 pb-2">
                  <span
                    id="fonts"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{i.category !== "HistoryPorn" ? i.category : "History"}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center text-center mb-6 mt-10">
        <div id="fonts" className="text-gray-600 text-lg font-light">
          --- It's probably time to get back to work! --
        </div>
      </div>

      {/* <Item.Group size="large" relaxed>
          {stream &&
            selected.map((item) => (
              <Item>
                {item.imageUrl ? (<Item.Image src={item.imageUrl} size="large" />) : <div>None</div>}
                
                <Item.Content>
                  <Item.Header>{item.title}</Item.Header>
                  <Item.Meta>
                    <a className="price" href={item.imageUrl} target="_blank">
                      Source
                    </a>
                  </Item.Meta>
                </Item.Content>
              </Item>
            ))}
        </Item.Group> */}
    </div>
  );
}

export default ArtDisplay;
