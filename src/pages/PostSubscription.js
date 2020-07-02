import React from "react";
import { Grid } from "semantic-ui-react";
import gql from "graphql-tag";

import { useSubscription } from "@apollo/react-hooks";

function PostSubscription() {
  const { data, loading } = useSubscription(NEW_POST_ADDED);
  console.log(data);
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <Grid.Column>
          <h1>Subscriptions come here</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="page-title">
        <Grid.Column>{!loading && <h4>New comment: {!loading && data.newPost.body}</h4>}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const NEW_POST_ADDED = gql`
  subscription newPost {
    newPost {
      id
      body
      username
    }
  }
`;

export default PostSubscription;
