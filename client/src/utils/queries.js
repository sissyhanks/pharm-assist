import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query user {
  user {
    _id
    username
    Medlist
  }
}
 }
`;