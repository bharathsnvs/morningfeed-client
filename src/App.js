import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import AddToHomeScreen from "./helper/AddToHomeScreen.js";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

// Context Provider
// import { AuthProvider } from "./context/auth";

import Home from "./pages/Home";

function App() {
  console.log('MOBILE ? ', isMobile)
  return (
    <Router>
      <Container style={styles.pagecontainer}>
        <AddToHomeScreen />

        <div style={styles.pageBackground}></div>
        <Container
          style={{
            ...styles.container,
            width: isMobile ? "97%" : "70%",
            backgroundColor: "#fff",
          }}
        >
          <Route exact path="/" component={Home} />
        </Container>
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
