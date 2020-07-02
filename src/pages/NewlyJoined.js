import React, { useEffect } from "react";
//import { useSubscription } from "@apollo/react-hooks";
import { Grid } from "semantic-ui-react";

//Context
//import { AuthContext } from "../context/auth";

function NewlyJoined({ roomId, user, subscribeToMoreUsers, onlineUsers }) {
    
  useEffect(() => subscribeToMoreUsers(), [])
  console.log('Online users, ', onlineUsers)

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Members in room</h1>
        
      </Grid.Row>
    </Grid>
  );
}

export default NewlyJoined;
