import React from "react";
import { Container, Statistic, Grid, List, Flag } from "semantic-ui-react";

function DisplayFin({ toDisplay }) {
  console.log("To display", toDisplay && toDisplay[0].contents[0].close);

  return (
    <Container>
      <div id="fonts" style={styles.subHeader}>
        Trends in Market Cap (India)
      </div>
      <Grid style={{ marginTop: 40, marginBottom: 40 }}>
        <Grid.Row columns={5}>
          {toDisplay[1].contents.slice(0, 5).map((item) => (
            <Grid.Column>
              <Statistic.Group size="small">
                <Statistic color={item.change > 0 ? "green" : "red"}>
                  <Statistic.Label>{item.sector}</Statistic.Label>
                  <Statistic.Value style={{ fontSize: 20 }}>
                    {item.change}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {toDisplay[1].contents.slice(5, 10).map((item) => (
            <Grid.Column>
              <Statistic.Group size="small">
                <Statistic color={item.change > 0 ? "green" : "red"}>
                  <Statistic.Label>{item.sector}</Statistic.Label>
                  <Statistic.Value style={{ fontSize: 20 }}>
                    {item.change}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {toDisplay[1].contents.slice(10, 15).map((item) => (
            <Grid.Column>
              <Statistic.Group size="small">
                <Statistic color={item.change > 0 ? "green" : "red"}>
                  <Statistic.Label>{item.sector}</Statistic.Label>
                  <Statistic.Value style={{ fontSize: 20 }}>
                    {item.change}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {toDisplay[1].contents.slice(15, 20).map((item) => (
            <Grid.Column>
              <Statistic.Group size="small">
                <Statistic color={item.change > 0 ? "green" : "red"}>
                  <Statistic.Label>{item.sector}</Statistic.Label>
                  <Statistic.Value style={{ fontSize: 20 }}>
                    {item.change}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

      {/* <Grid style={{ marginBottom: 40 }}>
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
      </Grid> */}
    </Container>
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
