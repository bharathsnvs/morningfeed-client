import React from "react";
import { Container, Label, List } from "semantic-ui-react";
import { isMobile } from "react-device-detect";


function TechNews({ stream }) {
  console.log("TECH", stream);
  return (
    <div>
      <div style={{  marginLeft: isMobile ? 0 : 15 }}>
        {stream ? (
          <Container id="fonts" style={styles.informationBox}>
            <div style={styles.coloredDiv}>
              <div id="fonts" style={styles.subHeader}>
                Reuters Tech
              </div>
              <List divided relaxed ordered>
                {stream ?
                  stream[1].contents.map((item) => (
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
                  )) : null}
              </List>
              <br />
              <br />
              <div id="fonts" style={styles.subHeader}>
                Hacker News
              </div>
              <List divided relaxed ordered>
                {stream &&
                  stream[0].contents.map((item) => (
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
    </div>
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
    marginLeft: isMobile ? 0 : 15,
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
