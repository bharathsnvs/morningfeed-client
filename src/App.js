import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { isMobileOnly } from "react-device-detect";
import AddToHomeScreen from "./helper/AddToHomeScreen.js";
import ReactGA from "react-ga";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

// Context Provider
// import { AuthProvider } from "./context/auth";

import Home from "./pages/Home";
import Tests from "./pages/Tests";

function App() {
  console.log("Mobile ? ", isMobileOnly);

  useEffect(() => {
    ReactGA.initialize("UA-177839765-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <Router>
      <Container style={styles.pagecontainer}>
        <AddToHomeScreen />

        <div style={styles.pageBackground}></div>
        <Container
          style={{
            ...styles.container,
            width: isMobileOnly ? "97%" : "70%",

            backgroundColor: "#fff",
          }}
        >
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/tests" component={Tests} /> */}
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
