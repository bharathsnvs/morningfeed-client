import React from "react";

function Tests() {
  return (
    <div style={{ margin: "auto" }}>
      <div style={styles.BGwrapper}>
        <div style={styles.Menu}> Links here </div>
      </div>
      <div style={styles.wrapper}>
        <div style={styles.behind}></div>
      </div>
      <div style={styles.infront}>
        <div style={styles.content}>
          <h1>Page Title</h1>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  BGwrapper: {
    position: "fixed",
    left: 350,
    top: 220,
    width: "100%",
    zIndex: 1,
  },
  Menu: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 2,
    width: "15%",
    margin: "0px auto 0px auto",
    padding: "auto",

    zIndex: 1,
  },
  wrapper: {
    position: "fixed",
    left: 0,
    top: 400,
    width: "100%",
    zIndex: 1,
  },
  behind: {
    backgroundColor: "#999",
    height: 100,
    width: "60%",
    margin: "0px auto 0px auto",

    zIndex: 1,
  },
  infront: {
    backgroundColor: "rgba(200,200,200,0.4)",
    width: "75%",
    margin: "200px auto 0px auto",
    position: "relative",
    zIndex: 2,
  },

  content: {
    padding: 7,
  },
};

export default Tests;
