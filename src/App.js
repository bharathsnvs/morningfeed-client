import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddToHomeScreen from "./helper/AddToHomeScreen.js";
import "./App.css";

// Context Provider
// import { AuthProvider } from "./context/auth";

import Home from "./pages/Home";
import Tests from "./pages/Tests";
import PageContent from "./components/PageContent";

//GA
import ReactGA from "react-ga";
ReactGA.initialize("UA-177839765-1");
const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function App() {
  useEffect(() => {
    const page = window.location.pathname;
    trackPage(page);
  }, []);

  return (
    <Router>
      <div style={styles.pagecontainer}>
        <AddToHomeScreen />
        <div style={styles.pageBackground}></div>
        <div className="max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex py-10">
          <Route exact path="/" component={PageContent} />
        </div>

        

        {/* <Route exact path="/tests" component={Tests} /> */}
      </div>
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
    borderRadius: 0,
    backgroundPosition: "center",
    backgroundImage:
      "url(" + "https://source.unsplash.com/collection/11413845/" + ")",

    marginBottom: 0,
  },
};

export default App;
