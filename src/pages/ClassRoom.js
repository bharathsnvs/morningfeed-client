import React, { useContext, useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import NewlyJoined from "./NewlyJoined";
//Queries
import { FETCH_ROOM_QUERY } from "../graphql/room";
//Context
import { AuthContext } from "../context/auth";

function Class() {
  const { user } = useContext(AuthContext);
  const roomId = window.location.pathname.split("/")[2];
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { data, error, loading, subscribeToMore } = useQuery(FETCH_ROOM_QUERY, {
    variables: {
      roomId,
    },
  });

  const [addUser] = useMutation(NEW_USER_MUTATION, {
    variables: {
      roomId: roomId,
      username: user.username,
    },
    update(_, result) {
      console.log(result);
      // console.log(result)
      // const data = cloneDeep(
      //   proxy.readQuery({
      //     query: FETCH_ROOM_QUERY,
      //     variables: {
      //       roomId: roomId,
      //       username: user.username,
      //     },
      //   })
      // );
      // const newUser = result.data.newUserJoined.roomUsers.filter((person) => {
      //   return person.username === user.username;
      // });
      // data.getRoomById.roomUsers.push(newUser[0]);
      // console.log(data);
      // proxy.writeQuery({ query: FETCH_ROOM_QUERY, data });
      //setFinalUsers(finalUsers => finalUsers.concat(newUser[0]))
      //console.log(finalUsers);
    },
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      setOnlineUsers(data.getRoomById.roomUsers);
    }
  }, [loading]);

  function subscribeToMoreUsers(){
    subscribeToMore({
      document: NEW_USER_SUBSCRIPTION,
      updateQuery: (currentUsers, { subscriptionData }) => {
        console.log(currentUsers);
        console.log(subscriptionData)
        if (!subscriptionData.data) return currentUsers;
        const newUser = subscriptionData.data.newUser;
        // console.log(currentUsers.getRoomById.roomUsers.length);

        const updatedUsers = currentUsers.getRoomById.roomUsers.concat(
          newUser
        );
        
        setOnlineUsers(updatedUsers);
        return { onlineUsers: updatedUsers };

      },
    });
  };

  function addUserCallback() {
    if (user && roomId) {
      addUser();
    }
  }

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <Grid.Column>
          <h1>{!loading && data.getRoomById.title}</h1>
          <br />
          <h1>Taken by: {!loading && data.getRoomById.leader}</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="page-title">
        {!loading &&
          user &&
          (data.getRoomById.leader === user.username ? (
            <Grid.Column>Welcome Teacher</Grid.Column>
          ) : (
            <div>
              <p>Welcome, {user.username}</p>
              <button onClick={addUserCallback}>Join Room</button>
            </div>
          ))}
      </Grid.Row>
      <Grid.Row className="page-title">
        <NewlyJoined
          user={user}
          subscribeToMoreUsers={subscribeToMoreUsers}
          roomId={roomId}
          onlineUsers={onlineUsers}
        />
      </Grid.Row>
    </Grid>
  );
}

const NEW_USER_MUTATION = gql`
  mutation newUserJoined($roomId: ID!, $username: String!) {
    newUserJoined(roomId: $roomId, username: $username) {
      roomUsers {
        username
        joinedAt
        role
      }
    }
  }
`;

const NEW_USER_SUBSCRIPTION = gql`
  subscription newUser {
    newUser {
      username
      joinedAt
      role
    }
  }
`;

export default Class;
