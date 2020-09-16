import React, { useState, useEffect } from "react";
import axios from "axios";

import ReactGA from "react-ga";

//Components
import GridEvents from "./materials/GridEvents";
import PageHeader from "./materials/PageHeader";

import Intro from "./Intro";
import WorldNews from "./WorldNews";
import FinNews from "./FinNews";
import TechNews from "./TechNews";
import HubskiNews from "./HubskiNews";
import FarnamSnippets from "./FarnamSnippets";
import ArtDisplay from "./ArtDisplay";
import MiscDisplay from "./MiscDisplay";
import EventsPlaceholder from "./EventsPlaceholder";
import EventsContainer from "./EventsContainer";

function PageContent() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("news");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    const result = await axios("https://informationfeed.herokuapp.com/");
    setFeed(JSON.parse(JSON.stringify(result.data)));
    feed && setLoading(false);
    console.log("Fetching");
  };
  console.log(feed);

  function changeView(type) {
    setView(type);
    ReactGA.event({
      category: "Category",
      action: `Changed page to ${type}`,
      label: "TYPE",
    });
  }

  const Fin = [feed[2], feed[8], feed[9], feed[3]];
  const Hubski = feed[1];
  const ReutersNews = feed[6];
  const Tech = [feed[0], feed[7]];
  const Farnam = feed[10];
  const Reddit = [feed[3], feed[4], feed[5]];
  const Artwork = [feed[11], feed[5]];
  const Misc = [feed[1], feed[4]];
  const worldEvents = feed[12];
  console.log(view);

  return (
    <div>
      
      <PageHeader loading={loading} view={view} changeView={changeView} />
      {!loading ? (
        view === "all" ? (
          <WorldNews />
        ) : view === "news" ? (
          <WorldNews stream={ReutersNews} worldEvents={worldEvents} />
        ) : view === "finance" ? (
          <FinNews stream={Fin} />
        ) : view === "tech" ? (
          <TechNews stream={Tech} />
        ) : view === "art" ? (
          <ArtDisplay stream={Artwork} />
        ) : view === "farnam" ? (
          <FarnamSnippets stream={Farnam} />
        ) : view === "misc" ? (
          <MiscDisplay stream={Misc} />
        ) : null
      ) : (
        <EventsPlaceholder />
      )}

      {/* STICKY ADD TO HOME SCREEN */}
      {/* <div className="sticky top-0 left-0">
        <div className="flex max-w-sm shadow-md rounded-lg overflow-hidden mx-auto mb-4">
          <div className="w-2 bg-gray-800"></div>
          <div className="flex justify-center items-center">
            <div className="flex p-3 bg-gray-200 rounded-lg justify-center items-center max-w-sm md:max-w-xl lg:max-w-4xl h-auto mx-auto lg:flex">
              <div>
                <img
                  className="w-10 h-10 ml-2 mb-2 md: object-cover rounded-full"
                  alt="User avatar"
                  src={require("../assets/fractal1.svg")}
                />

                <div className="mx-3">
                  <p className="text-gray-600 font-semibold">
                    Did you know you can add this page to your home screen?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <Grid style={styles.container}>
        <Grid.Column style={{}}>
          <Grid.Row style={styles.firstRow}>
            <div style={styles.contentContainer}>
              <Intro
                changeView={changeView}
                view={view}
                fetchData={fetchData}
                loading={loading}
              />
            </div>
          </Grid.Row>
          {!loading ? (
            view === "all" ? (
              fullView()
            ) : view === "news" ? (
              <WorldNews stream={ReutersNews} worldEvents={worldEvents} />
            ) : view === "finance" ? (
              <FinNews stream={Fin} />
            ) : view === "tech" ? (
              <TechNews stream={Tech} />
            ) : view === "art" ? (
              <ArtDisplay stream={Artwork} />
            ) : view === "farnam" ? (
              <FarnamSnippets stream={Farnam} />
            ) : view === "misc" ? (
              <MiscDisplay stream={Misc} />
            ) : null
          ) : (
            <EventsPlaceholder />
          )}
        </Grid.Column>
      </Grid> */}
    </div>
  );
}

const styles = {
  container: {
    // borderStyle: "solid",
    // borderColor: "lightgray",
    margin: 5,
    borderRadius: 5,
  },
  firstRow: {
    height: "auto",
    // borderStyle: "solid",
    // borderColor: "lightgray",
  },

  contentRow: {
    // borderStyle: "solid",
    // borderColor: "lightgray",
    borderRadius: 5,
    height: "auto",
  },
  pageBackground: {
    width: "100%",
    height: "300px",
    borderRadius: 4,
    backgroundPosition: "center",
    backgroundImage: `url(" + "https://source.unsplash.com/collection/1261/" + ")`,
    // filter: "blur(10px)",
    marginBottom: 20,
  },
  contentContainer: {
    marginLeft: 15,
    marginTop: 0,
    marginRight: 15,

    paddingTop: 0,
  },
};

export default PageContent;
