import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const ADD_USER = gql`
mutation addUser($username: String!,$firstName: String!, $lastName:String!, $email: String!, $password: String!) {
  addUser(username: $username,firstName:$firstName,lastName:$lastName, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
export const ADD_MED = gql`
mutation addMed($userId: ID!, $medecine: String!) {
  addMed(userId: $userId, medecine: $medecine) {
    _id
    username
    Medlist
  }
}
`;

export const REMOVE_MED = gql`
mutation removeMed($medecine: String!) {
  removeMed(medecine: $medecine) {
    _id
    username
   Medlist
  }
}
`;