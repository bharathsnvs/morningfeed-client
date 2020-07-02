import React from "react";
import { Card, Image, Button, Form } from "semantic-ui-react";
//import { Link } from "react-router-dom";

import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { useForm } from "../hooks/formHooks";
import cloneDeep from 'clone-deep';

//Queries
import { FETCH_POSTS_QUERY } from "../graphql/graphql";

function PostCard() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: "",
  });

  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = cloneDeep(proxy.readQuery({
        query: FETCH_POSTS_QUERY
      }));
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      values.body = '';
    },
    
  });

  function createPostCallback() {
    createPost();
  }
  return (
    <Card raised fluid style={{ height: 145 }}>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header id="fonts">Announce</Card.Header>
        <Card.Meta>Tell the team</Card.Meta>
        <Card.Description id="fonts">
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <Form.Input
                placeholder="..."
                name="body"
                onChange={onChange}
                value={values.body}
              />
              <Button type="submit"  content="Send" size="mini" />
            </Form.Field>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;


export default PostCard;
