import React, { useState, useEffect } from "react";
import { Modal, Header, Input, Icon } from "semantic-ui-react";
import useEvent from "../hooks/useEvent";

import PageContent from "../components/PageContent";

function Home() {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);

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
    if (input === "admin") {
      setOpen(false);
    } else {
      console.log("incorrect");
      setPassword("");
    }
  }

  return (
    <div>
      <Modal
        onClose={() => setOpen(true)}
        onOpen={() => setOpen(true)}
        open={open}
        closeOnDimmerClick={false}
        style={styles.modal}
      >
        <Modal.Header style={styles.modal} id="fonts">
          Enter pass
        </Modal.Header>
        <Modal.Content style={styles.modal}>
          <Modal.Description>
            <Header style={styles.modal} id="fonts">
              Confirm user
            </Header>
            <Input
              icon={
                <Icon
                  onClick={() => validateInput(password)}
                  name="chevron right"
                  fitted
                  link
                  size="small"
                />
              }
              type="password"
              style={styles.input}
              transparent
              placeholder="Enter..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p id="fonts" style={{ marginTop: 50 }}>
              Contact usalresearchteam@gmail.com for access
            </p>
          </Modal.Description>
        </Modal.Content>
      </Modal>

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
