import gql from "graphql-tag";

export const FETCH_NOTES_QUERY = gql`
  {
    getNotes {
      id
      body
      createdAt
      owner
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

export const FETCH_SINGLE_NOTE_QUERY = gql`
  query getNoteById($noteId: ID!) {
    getNoteById(noteId: $noteId) {
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
