import React from "react";

function DisplayFin({ toDisplay }) {
  const indices = toDisplay[0].contents;
  const indicesToDisplay = indices && [
    indices[1],
    indices[3],
    indices[7],
    indices[9],
    indices[18],
    indices[12],
    indices[37],
    indices[39],
    indices[40],
    indices[41],
  ];
  console.log(indicesToDisplay);
  return (
    <div className="max-w-sm md:max-w-xl  lg:max-w-3xl h-auto mx-auto lg:flex mt-5 py-0 mb-0">
      <div className="md:flex md:justify-start">
        <div className="flex ">
          <div className="border mb-3 p-5 md:p-6 rounded-md grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {toDisplay &&
              toDisplay[1].contents.map((i) => (
                <div
                  id="fonts"
                  className="text-start text-gray-900 font-semibold"
                >
                  <span
                    id="fonts"
                    className="uppercase tracking-wider font-semibold"
                  >
                    {i.sector === "Telecommunications"
                      ? "TELECOM"
                      : i.sector === "Metals - Ferrous"
                      ? "Metals"
                      : i.sector}
                  </span>{" "}
                  :{" "}
                  <span
                    className={
                      i.change > 0 ? "text-green-700" : "text-orange-800"
                    }
                  >
                    {i.change}%
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="flex md:hidden justify-evenly mb-5 mt-6 md:mb-0 md:mt-0">
          <div id="fonts" className="text-gray-600 text-lg font-semibold">
            Major Indices
          </div>
        </div>
        <div className="flex md:w-auto">
          <div className="md:mt-0 md:pt-0 p-5 md:p-6 rounded-md grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 ">
            {indicesToDisplay &&
              indicesToDisplay.map((i) => (
                <div className="border grid grid-cols-2 gap-1 lg:gap-1">
                  <div
                    id="fonts"
                    className="w-1/2 items-startfont-semibold p-3 md:p-4"
                  >
                    {i.index[0]}
                  </div>{" "}
                  <div className="w-1/2 border-l p-3 md:p-4 flex justify-start">
                    <div
                      className={
                        i.change[1] > 0 ? "text-green-700" : "text-orange-800"
                      }
                    >
                      {i.change[1] > 0 ? (
                        <span>▲ {i.change[1]}</span>
                      ) : (
                        <span>▼ {i.change[1]}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    // <Container>
    //   <div id="fonts" style={styles.subHeader}>
    //     Trends in Market Cap (India)
    //   </div>
    //   <Grid style={{ marginTop: 40, marginBottom: 40 }} stackable>
    //     <Grid.Row columns={5}>
    //       {toDisplay[1].contents.slice(0, 5).map((item) => (
    //         <Grid.Column>
    //           <Statistic.Group size="small">
    //             <Statistic color={item.change > 0 ? "green" : "red"}>
    //               <Statistic.Label>{item.sector}</Statistic.Label>
    //               <Statistic.Value style={{ fontSize: 20 }}>
    //                 {item.change}
    //               </Statistic.Value>
    //             </Statistic>
    //           </Statistic.Group>
    //         </Grid.Column>
    //       ))}
    //     </Grid.Row>
    //     <Grid.Row columns={5}>
    //       {toDisplay[1].contents.slice(5, 10).map((item) => (
    //         <Grid.Column>
    //           <Statistic.Group size="small">
    //             <Statistic color={item.change > 0 ? "green" : "red"}>
    //               <Statistic.Label>{item.sector}</Statistic.Label>
    //               <Statistic.Value style={{ fontSize: 20 }}>
    //                 {item.change}
    //               </Statistic.Value>
    //             </Statistic>
    //           </Statistic.Group>
    //         </Grid.Column>
    //       ))}
    //     </Grid.Row>
    //     <Grid.Row columns={5}>
    //       {toDisplay[1].contents.slice(10, 15).map((item) => (
    //         <Grid.Column>
    //           <Statistic.Group size="small">
    //             <Statistic color={item.change > 0 ? "green" : "red"}>
    //               <Statistic.Label>{item.sector}</Statistic.Label>
    //               <Statistic.Value style={{ fontSize: 20 }}>
    //                 {item.change}
    //               </Statistic.Value>
    //             </Statistic>
    //           </Statistic.Group>
    //         </Grid.Column>
    //       ))}
    //     </Grid.Row>
    //     <Grid.Row columns={5}>
    //       {toDisplay[1].contents.slice(15, 20).map((item) => (
    //         <Grid.Column>
    //           <Statistic.Group size="small">
    //             <Statistic color={item.change > 0 ? "green" : "red"}>
    //               <Statistic.Label>{item.sector}</Statistic.Label>
    //               <Statistic.Value style={{ fontSize: 20 }}>
    //                 {item.change}
    //               </Statistic.Value>
    //             </Statistic>
    //           </Statistic.Group>
    //         </Grid.Column>
    //       ))}
    //     </Grid.Row>
    //   </Grid>

    /* <Grid style={{ marginBottom: 40 }}>
        <Grid.Row columns={2}>
          <Grid.Column>
            <List relaxed="very">
              <List.Item>
                <Flag name="us" />
                <List.Content>
                  <List.Header>{toDisplay[0].contents[3].index[0]}</List.Header>
                  <List.Description>
                    Changed by{" "}
                    {
                      <span
                        style={{
                          color:
                            toDisplay[0].contents[3].change[1] > 0
                              ? "#21ba45"
                              : "#db2829",
                        }}
                      >
                        {toDisplay[0].contents[3].change[1]}
                      </span>
                    }
                    , now at {toDisplay[0].contents[3].close[1]}
                  </List.Description>
                  
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List relaxed="very">
              <List.Item>
                <Flag name="us" />
                <List.Content>
                  <List.Header>{toDisplay[0].contents[1].index[0]}</List.Header>
                  <List.Description>
                    Changed by{" "}
                    {
                      <span
                        style={{
                          color:
                            toDisplay[0].contents[1].change[1] > 0
                              ? "#21ba45"
                              : "#db2829",
                        }}
                      >
                        {toDisplay[0].contents[1].change[1]}
                      </span>
                    }
                    , now at {toDisplay[0].contents[1].close[1]}
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid> */
  );
}

export default DisplayFin;

const styles = {
  subHeader: {
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 20,
    marginTop: 40,
  },
};
