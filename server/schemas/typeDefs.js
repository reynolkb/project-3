const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        myPalettes: [Palette]
        favorites: [Palette]
    }

    type Palette {
        _id: ID
        title: String
        description: String
        secondary: String
        accent1: String
        accent2: String
        accent3: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        palettes(username: String): [Palette]
        palette(_id: ID!): Palette
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(
            username: String!
            email: String!
            password: String!
        ): Auth
        addPalette(
            description: String!
            primary: String!
            secondary: String!
            accent1: String!
            accent2: String!
            accent3: String!
        ): Palette
    }
`;

module.exports = typeDefs;