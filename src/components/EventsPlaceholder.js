import React from "react";

function EventsPlaceholder({ worldEvents }) {
  const selectedEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div className="relative mt-4 lg:mt-10 flex justify-center items-center h-auto">
        <div className="inline-block rounded-full animate-bounce ease duration-300 w-3 h-3 bg-gray-600 mx-2"></div>

        <div className="inline-block rounded-full animate-ping ease duration-300 w-3 h-3 bg-gray-600 mx-2"></div>
        <div className="inline-block rounded-full animate-ping ease duration-300 w-3 h-3 bg-gray-600 mx-2"></div>
        <div className="inline-block rounded-full animate-bounce ease duration-300 w-3 h-3 bg-gray-600 mx-2"></div>
      </div>
      {/* <Card.Group style={styles.eventsBox} centered itemsPerRow={3} stackable>
        {selectedEvents &&
          selectedEvents.map((item, key) => (
            <Card key={item} style={{ height: 150 }}>
              <Card.Content>
                <Card.Header id="fonts">
                  <Placeholder>
                    <Placeholder.Line />
                  </Placeholder>
                </Card.Header>

                <Card.Description id="fonts">
                  <Placeholder>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder>
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
      </Card.Group> */}
    </div>
  );
}

export default EventsPlaceholder;

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
