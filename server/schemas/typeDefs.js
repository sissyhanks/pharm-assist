const { gql } = require('apollo-server-express');

const typeDefs = gql`
type medicine {
   name: String!
   dosage: String!
   schedule: String!
}

 type user {
   _id: ID!
   username: String!
   email: String!
   medlist: [medicine]
}
type Auth {
  token: ID!
  user: user
}
type Query {
  users: [user]!
  user(userId: ID!): user
  me: user
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addMed(userId: ID!, name: String!, dosage: String!, schedule: String!): user
  removeMed(name: String!): user
}
`;

module.exports = typeDefs;
