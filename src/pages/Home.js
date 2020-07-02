import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard.js";
import NewPost from "../components/NewPost.js";
//Context
import { AuthContext } from "../context/auth";

//Queries
import { FETCH_POSTS_QUERY } from "../graphql/graphql";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user)

  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1 id="fonts">Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <NewPost user={user} />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          data.getPosts &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}



export default Home;
