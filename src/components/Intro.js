import React from "react";
import { Container, Label, List } from "semantic-ui-react";

function Intro({ changeView, view }) {
  return (
    <div>
      <div id="fonts" style={styles.header}>
        <div style={{ display: "inline-block", marginBottom: 10 }}>
          #{view}{" "}
          {view === "farnam" ? (
            <span style={{ color: "gray", display: "inline-block" }}>
              {" "}
              - decision-making, culture, and more
            </span>
          ) : view === "finance" ? (
            <span style={{ color: "gray", display: "inline-block" }}>
              {" "}
              - market news and movements
            </span>
          ) : view === "news" ? (
            <span style={{ color: "gray", display: "inline-block" }}>
              {" "}
              - snapshots of the world
            </span>
          ) : view === "art" ? (
            <span style={{ color: "gray", display: "inline-block" }}>
              {" "}
              - glimpses of everything good there is
            </span>
          ) : view === "tech" ? (
            <span style={{ color: "gray", display: "inline-block" }}>
              {" "}
              - consequences of all curiosity
            </span>
          ) : view === "misc" ? (
            <span style={{ color: "gray", display: "inline-block" }}>
              {" "}
              - the best of rest of the web
            </span>
          ) : null}
        </div>
      </div>
      <Label
        size="large"
        as="a"
        onClick={() => changeView("news")}
        image
        style={{ marginBottom: 0, marginTop: 20 }}
      >
        <img src="https://store-images.s-microsoft.com/image/apps.47747.9007199266536044.863230ca-de90-40a3-b269-d14b7d44970d.12b809a9-4120-4a07-9fd3-71fc318a4657" />
        #news
      </Label>
      <Label
        size="large"
        as="a"
        onClick={() => changeView("tech")}
        image
        style={{ marginBottom: 0, marginTop: 20 }}
      >
        <img src="https://sloanreview.mit.edu/content/uploads/2016/08/FR-TS-Tech-Industry-1200-300x300.jpg" />
        #tech
      </Label>
      <Label
        size="large"
        as="a"
        onClick={() => changeView("finance")}
        image
        style={{ marginBottom: 0, marginTop: 20 }}
      >
        <img src="https://www.livingwellspendingless.com/wp-content/uploads/2018/04/Money-Money-Money-SQUARE2_preview-300x300.jpeg" />
        #fin
      </Label>

      <Label
        size="large"
        as="a"
        onClick={() => changeView("art")}
        image
        style={{ marginBottom: 0, marginTop: 20 }}
      >
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/65/78ce0081ad11e681d7bb31b0a632ef/starry-night.jpg?auto=format%2Ccompress&dpr=1" />
        #art
      </Label>
      <Label
        size="large"
        as="a"
        onClick={() => changeView("farnam")}
        image
        style={{ marginBottom: 0, marginTop: 20 }}
      >
        <img src="https://ocbj.media.clients.ellingtoncms.com/img/debates/pundit/2020/05/21/Munger_Charlie_r300x300.jpg?1e170c4591cc8fc122271144bf15389278832808" />
        #bestoftheWeb
      </Label>
      {/* <Label
        size="large"
        as="a"
        onClick={() => changeView("agriculture")}
        image
        style={{ marginBottom: 0, marginTop: 20 }}
      >
        <img src="https://mk0egoveletsonla87wv.kinstacdn.com/wp-content/uploads/2016/08/Agri-App.png" />
        #agri
      </Label> */}
      <Label
        size="large"
        as="a"
        onClick={() => changeView("misc")}
        image
        style={{ marginBottom: 0, marginTop: 20 }}
      >
        <img src="https://i.insider.com/5f3fe11189aff80028ab71ff?width=750&format=jpeg&auto=webp" />
        #misc
      </Label>
    </div>
  );
}

export default Intro;

const styles = {
  header: {
    fontWeight: 700,
    fontSize: 40,
    marginTop: 0,
    padding: 0,
  },
};
