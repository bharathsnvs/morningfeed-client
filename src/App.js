import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

// Context Provider
import { AuthProvider } from "./context/auth";

import AuthRoute from './util/AuthRoute'

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Class from "./pages/Class";
import ClassRoom from "./pages/ClassRoom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import PostSubscription from './pages/PostSubscription'


function App() {
  return (
    <AuthProvider>
      <Router>
        <Container style={{ width: "70%" }}>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/note" component={Class} />
          <Route exact path="/room/:roomId" component={ClassRoom} />
          <Route exact path="/updates" component={PostSubscription} />
          <Route exact path="/upload" component={Upload} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
