import React from "react";
import { Container, Label, List } from "semantic-ui-react";
import { isMobile } from "react-device-detect";


import DisplayFin from "./DisplayFin";

function FinNews({ stream }) {
  console.log("FINANCE", stream);
  const bstandard = stream && stream[0].contents;
  const redditFin = stream && stream[3].contents.filter((i) => i.category === "finance");
  return (
    <div style={{ marginLeft: isMobile ? 0 : 15  }}>
      <DisplayFin toDisplay={[stream[1], stream[2]]} />
      {stream ? (
        <Container id="fonts" style={styles.informationBox}>
          <div style={styles.coloredDiv}>
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
            <List divided relaxed ordered>
              {redditFin &&
                redditFin.slice(0,10).map((item) => (
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
            <div id="fonts" style={styles.subHeader}>
              Business Standard
            </div>
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
      ) : null}
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
    marginLeft: isMobile ? 0 : 15 
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
