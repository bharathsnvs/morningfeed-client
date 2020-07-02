import gql from "graphql-tag";

export const FETCH_ALL_ROOMS_QUERY = gql`
  query {
    getRooms {
      id
      leader
      title
      field
      type
      createdAt
      roomData {
        data1
        data2
        data3
      }
      roomUsers {
        username
        joinedAt
        role
      }
    }
  }
`;

export const FETCH_ROOM_QUERY = gql`
  query getRoomById($roomId: ID!) {
    getRoomById(roomId: $roomId) {
      id
      leader
      title
      field
      type
      createdAt
      roomData {
        data1
        data2
        data3
      }
      roomUsers {
        username
        joinedAt
        role
      }
    }
  }
`;
