import React, { useState } from "react";
import { Container, Icon, List, Accordion } from "semantic-ui-react";
import { isMobile } from "react-device-detect";


function FarnamSnippets({ stream }) {
  const [activeIndex, setActiveIndex] = useState(5);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
    console.log("Active Index", activeIndex);
  };
  return (
    <div style={{ marginLeft: isMobile ? 0 : 15 }}>
      {stream ? (
        <Container id="fonts" style={styles.informationBox}>
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
                  <Icon name="dropdown" />
                  <List.Header
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
                  <Icon name="dropdown" />
                  <List.Header
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
                  <Icon name="dropdown" />
                  <List.Header
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
                  <Icon name="dropdown" />
                  <List.Header
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
        </Container>
      ) : null}
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
    fontSize: 35,
  },
};
