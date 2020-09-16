import React, { useState, useEffect } from "react";
import useEvent from "../hooks/useEvent";

import PageContent from "../components/PageContent";

function Home() {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  function keydownHandler(e) {
    if (e.keyCode === 13) {
      validateInput(password);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEvent("keydown", keydownHandler);

  function validateInput(input) {
    if (input === "uptodate") {
      setOpen(false);
    } else {
      console.log("incorrect");
      setPassword("");
    }
  }

  return (
    <div>
      

      <PageContent />
    </div>
  );
}

export default Home;

const styles = {
  modal: {
    backgroundColor: "#0d1720",
    color: "snow",
  },
  input: {
    width: 200,
    color: "snow",
  },
};
