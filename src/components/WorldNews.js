import React from "react";
import { Container, Label, List } from "semantic-ui-react";

function WorldNews({ stream }) {
  const indiaSpecific =
    stream && stream.contents.filter((i) => i.location === "top-news");
  const worldSpecific =
    stream && stream.contents.filter((i) => i.location === "world");
  return (
    <div style={{ marginLeft: 15 }}>
      {stream ? (
        <Container id="fonts" style={styles.informationBox}>
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
