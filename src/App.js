import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { isMobileOnly } from "react-device-detect";
import AddToHomeScreen from "./helper/AddToHomeScreen.js";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

// Context Provider
// import { AuthProvider } from "./context/auth";

import Home from "./pages/Home";

function App() {
  console.log('Mobile ? ', isMobileOnly)
  return (
    <Router>
      <Container style={styles.pagecontainer}>
        <AddToHomeScreen />

        <div style={styles.pageBackground}></div>
        <div
          style={{
            ...styles.container,
            width: isMobileOnly ? "97%" : "70%",
            padding: isMobileOnly ? 0 : null,
            marginLeft: isMobileOnly ? 0 : null,
            backgroundColor: "#fff",
          }}
        >
          <Route exact path="/" component={Home} />
        </div>
      </Container>
    </Router>
  );
}

const styles = {
  pagecontainer: {
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 2,
  },
  pageBackground: {
    width: "100%",
    height: "260px",
    borderRadius: 4,
    backgroundPosition: "center",
    backgroundImage:
      "url(" + "https://source.unsplash.com/collection/11413845/" + ")",

    marginBottom: 0,
  },
};

export default App;
