import React, { useState, useEffect } from "react";
import { Grid, Loader } from "semantic-ui-react";
import axios from "axios";
import { isMobileOnly } from "react-device-detect";


//Components
import Intro from "./Intro";
import WorldNews from "./WorldNews";
import FinNews from "./FinNews";
import TechNews from "./TechNews";
import HubskiNews from "./HubskiNews";
import FarnamSnippets from "./FarnamSnippets";
import ArtDisplay from "./ArtDisplay";
import MiscDisplay from "./MiscDisplay";
import EventsPlaceholder from "./EventsPlaceholder";

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
    console.log('Fetching')
  };
  console.log(feed);

  function changeView(type) {
    setView(type);
  }

  const Fin = [feed[2], feed[8], feed[9], feed[3]];
  const Hubski = feed[1];
  const ReutersNews = feed[6];
  const Tech = [feed[0], feed[7]];
  const Farnam = feed[10];
  const Reddit = [feed[3], feed[4], feed[5]];
  const Artwork = [feed[11], feed[5]];
  const Misc = [feed[1], feed[4]];
  const worldEvents = feed[3];

  const fullView = () => {
    return (
      <div>
        <Grid.Row style={styles.contentRow}>
          <div style={styles.contentContainer}>
            <WorldNews stream={ReutersNews} />
          </div>
        </Grid.Row>
        <br />
        <Grid.Row style={styles.contentRow}>
          <div style={styles.contentContainer}>
            <TechNews stream={Tech} />
          </div>
        </Grid.Row>
        <br />

        <Grid.Row style={styles.contentRow}>
          <div style={styles.contentContainer}>
            <FinNews stream={Fin} />
          </div>
        </Grid.Row>

        <br />
        <Grid.Row style={styles.contentRow}>
          Reddit pics / blast from the past
        </Grid.Row>
        <br />
        <Grid.Row style={styles.contentRow}>
          <div style={styles.contentContainer}>
            <HubskiNews stream={Hubski} />
          </div>
        </Grid.Row>
        <br />
        <Grid.Row style={styles.contentRow}>
          <div style={styles.contentContainer}>
            <FarnamSnippets stream={Farnam} />
          </div>
        </Grid.Row>
        <br />
        <Grid.Row style={styles.contentRow}></Grid.Row>
      </div>
    );
  };

  return (
    <div>
      <Grid style={styles.container}>
        <Grid.Column style={{}}>
          <Grid.Row style={styles.firstRow}>
            <div style={styles.contentContainer}>
              <Intro changeView={changeView} view={view} fetchData={fetchData} loading={loading}/>
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
      </Grid>
    </div>
  );
}

const styles = {
  container: {
    // borderStyle: "solid",
    // borderColor: "lightgray",
    margin: isMobileOnly ? 0 : "auto",
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
