import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import axios from "axios";

//Components
import Intro from "./Intro";
import WorldNews from "./WorldNews";
import FinNews from "./FinNews";
import TechNews from "./TechNews";
import HubskiNews from "./HubskiNews";
import FarnamSnippets from "./FarnamSnippets";
import ArtDisplay from "./ArtDisplay";
import MiscDisplay from './MiscDisplay'

function PageContent() {
  const [feed, setFeed] = useState([]);
  const [view, setView] = useState("news");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:5000/");
      setFeed(JSON.parse(JSON.stringify(result.data)));
    };
    fetchData();
  }, []);
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
  const Misc = [feed[1], feed[4]]

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
        <Grid.Column>
          <Grid.Row style={styles.firstRow}>
            <div style={styles.contentContainer}>
              <Intro changeView={changeView} view={view} />
            </div>
          </Grid.Row>
          {view === "all" ? (
            fullView()
          ) : view === "news" ? (
            <WorldNews stream={ReutersNews} />
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
          ) : null}
        </Grid.Column>
      </Grid>
    </div>
  );
}

const styles = {
  container: {
    // borderStyle: "solid",
    // borderColor: "lightgray",
    margin: "auto",
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
