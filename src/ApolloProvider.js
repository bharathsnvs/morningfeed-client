// We export a apollo provider that wraps the entire Application
import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  //Points to graphql server (endpoint for server)
  uri: "http://localhost:5000",
});

const authLink = setContext(() => {
  //To allow the server realise that the user has a token
  //and that hey acan post
  //Adds the authorization header
  // Allows to send protected api calls
  const token = localStorage.getItem("jwtToken");
  return {
      headers: {
          Authorization: token ? `Bearer ${token}` : ""
      }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



export default (
  <ApolloProvider client={client}>
    <App id="fonts" />
  </ApolloProvider>
);
