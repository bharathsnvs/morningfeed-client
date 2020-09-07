import React from "react";
import { Container, Label, List, Loader } from "semantic-ui-react";
import { isMobile } from "react-device-detect";

import EventsContainer from "./EventsContainer";

function WorldNews({ stream, worldEvents }) {
  const indiaSpecific =
    stream && stream.contents.filter((i) => i.location === "top-news");
  const worldSpecific =
    stream && stream.contents.filter((i) => i.location === "world");
  return (
    <div style={{ marginLeft: isMobile ? 0 : 15 }}>
      {stream ? (
        <Container id="fonts" style={styles.informationBox}>
          <EventsContainer worldEvents={worldEvents} />

          <div style={styles.coloredDiv}>
            <div id="fonts" style={styles.subHeader}>
              India
            </div>
            <List divided relaxed ordered>
              {indiaSpecific &&
                indiaSpecific.slice(0, -2).map((item) => (
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
                    <List.Description>{item.excerpt}</List.Description>
                  </List.Item>
                ))}
            </List>
            <br />
            <br />
            <div id="fonts" style={styles.subHeader}>
              World
            </div>
            <List divided relaxed ordered>
              {worldSpecific &&
                worldSpecific.slice(0, -2).map((item) => (
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
                    <List.Description>{item.excerpt}</List.Description>
                  </List.Item>
                ))}
            </List>
            <br />
            <br />
          </div>
        </Container>
      ) : null}
    </div>
  );
}

export default WorldNews;

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
