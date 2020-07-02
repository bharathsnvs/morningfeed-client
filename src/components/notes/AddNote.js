import React from "react";
import { Card, Button, Form } from "semantic-ui-react";

import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { useForm } from "../../hooks/formHooks";
import cloneDeep from "clone-deep";

//Queries
import {FETCH_NOTES_QUERY} from '../../graphql/notes'


function AddNote() {
  const { values, onChange, onSubmit } = useForm(createNoteCallback, {
    body: "",
    description: "",
  });

  const [createNote] = useMutation(CREATE_NOTE_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = cloneDeep(proxy.readQuery({
        query: FETCH_NOTES_QUERY
      }));
      data.getNotes = [result.data.createNote, ...data.getNotes];
      proxy.writeQuery({ query: FETCH_NOTES_QUERY, data });
      values.body = "";
      values.description = "";
    },
  });

  function createNoteCallback() {
    createNote();
  }
  return (
    <Card raised fluid style={{ height: 'auto' }}>
      <Card.Content>
        <Card.Header id="fonts">Send a Note</Card.Header>
        <Card.Meta>Tell the team</Card.Meta>
        <Card.Description id="fonts">
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <Form.Input
                placeholder="body"
                name="body"
                onChange={onChange}
                value={values.body}
              />
              
              <Form.Input
                placeholder="description"
                name="description"
                onChange={onChange}
                value={values.description}
              />
              <Button type="submit" content="Send" size="mini" />
              <Card.Description extra id="fonts">
              <p></p>
              </Card.Description>
            </Form.Field>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

const CREATE_NOTE_MUTATION = gql`
  mutation createNote($body: String!, $description: String!) {
    createNote(body: $body, description: $description) {
      id
      body
      owner
      createdAt
      allowedUsers {
        username
      }
      metaData {
        description
        model
        type
      }
    }
  }
`;

export default AddNote;
