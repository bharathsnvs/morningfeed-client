import React from "react";
import { Card, Popup, Loader } from "semantic-ui-react";

function EventsContainer({ worldEvents }) {
  
  const eventsToShow = worldEvents && worldEvents.contents;
  const shuffled = eventsToShow
    .filter((i) => i.category === "worldevents")
    .sort(() => 0.5 - Math.random());
  const selectedEvents = shuffled.slice(0, 9);


  function reduceText(text) {
    var result = text;
    var resultArray = result.split(" ");
    if (resultArray.length > 14) {
      resultArray = resultArray.slice(0, 13);
      result = resultArray.join(" ") + "...";
    }
    return result;
  }
  return selectedEvents ? (
    <div >
      <div id="fonts" style={styles.subHeader}>
        Highlights
      </div>
      <Card.Group style={styles.eventsBox} centered itemsPerRow={3} stackable>
        {selectedEvents &&
          selectedEvents.map((item) => (
            <Popup
              content={item.title}
              inverted
              trigger={
                <Card href={item.link} target={"_blank"}>
                  <Card.Description id="fonts"></Card.Description>
                  <Card.Content>
                    <Card.Header id="fonts">
                      {reduceText(item.title)}
                    </Card.Header>

                    {/* <Card.Meta id="fonts">Co-Worker</Card.Meta> */}
                    <Card.Description id="fonts">
                      {item.source}
                    </Card.Description>
                  </Card.Content>
                </Card>
              }
            ></Popup>
          ))}
      </Card.Group>
    </div>
  ) : (
    <Loader />
  );
}

export default EventsContainer;

const styles = {
  eventsBox: {
    marginTop: 20,
    marginBottom: 20,
    // borderStyle: 'none',
    borderColor: "blue",
  },
  subHeader: {
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
};
