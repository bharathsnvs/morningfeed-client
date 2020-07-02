import React from "react";
import { Grid } from "semantic-ui-react";
import AddNote from '../components/notes/AddNote'
import { useQuery } from "@apollo/react-hooks";
//Queries
import { FETCH_NOTES_QUERY } from "../graphql/notes";
//Context
//import { AuthContext } from "../context/auth";

function Class() {
  const { data } = useQuery(FETCH_NOTES_QUERY);
  console.log(data)

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <Grid.Column>
          <h1>Hi</h1>
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="page-title">
        
        <Grid.Column>
          <AddNote />
          
        </Grid.Column>
      </Grid.Row>
      
    </Grid>
  );
}


export default Class;
