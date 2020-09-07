import React from "react";
import { Container, Label, List } from "semantic-ui-react";
import { isMobile } from "react-device-detect";


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
    <div style={{ marginLeft: isMobile ? 0 : 15 }}>
      {stream ? (
        <Container id="fonts" style={styles.informationBox}>
          <div style={styles.coloredDiv}>
            <br  />
            <List divided relaxed ordered>
              {selected &&
                selected.map((item) => (
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
                        {item.upvoteRatio
                          ? item.title
                              .split(" ")
                              .slice(2)
                              .reduce(
                                (acc, x) =>
                                  acc === null ? [x] : [acc, " ", x],
                                null
                              )
                          : item.title}
                      </p>
                      {/* {item.upvoteRatio
                        ? console.log(item.title.split(" ").slice(2))
                        : null} */}
                    </List.Header>
                    <List.Description>
                      {item.tags ? (
                        <p>#{item.tags}</p>
                      ) : (
                        <a href={item.link} target="_blank">
                          {item.source}
                        </a>
                      )}
                    </List.Description>
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
    textTransform: "capitalize",
  },
};
