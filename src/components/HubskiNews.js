import React from "react";

function HubskiNews({ stream }) {
  console.log(("HUBSKI", stream));
  return (
    <div>
      <div id="fonts" style={styles.header}>
        Hubski Misc
      </div>
    </div>
  );
}

export default HubskiNews;

const styles = {
  header: {
    fontWeight: 700,
    fontSize: 40,
  },
};
