// // We export a apollo provider that wraps the entire Application
// import React from "react";
// import App from "./App";
// import ApolloClient from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// // import { WebSocketLink } from 'apollo-link-ws';
// import { HttpLink } from 'apollo-link-http';
// //import { createHttpLink } from "apollo-link-http";
// import { ApolloProvider } from "@apollo/react-hooks";
// import { setContext } from "apollo-link-context";
// import { split } from 'apollo-link';
// import { getMainDefinition } from 'apollo-utilities'

// // Create an http link:
// const httpLink = new HttpLink({
//   uri: 'http://localhost:5000'
// });

// // Create a WebSocket link:
// // const wsLink = new WebSocketLink({
// //   uri: `ws://localhost:5000/graphql`,
// //   options: {
// //     reconnect: true
// //   }
// // });

// // using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent
// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
// //   wsLink,
//   httpLink,
// );

// const authLink = setContext(() => {
//   //To allow the server realise that the user has a token
//   //and that hey acan post
//   //Adds the authorization header
//   // Allows to send protected api calls
//   const token = localStorage.getItem("jwtToken");
//   return {
//       headers: {
//           Authorization: token ? `Bearer ${token}` : ""
//       }
//   }
// });

// const client = new ApolloClient({
//   link: authLink.concat(link),
//   cache: new InMemoryCache(),
// });



// export default (
//   <ApolloProvider client={client}>
//     <App id="fonts" />
//   </ApolloProvider>
// );
