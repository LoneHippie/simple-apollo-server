import { gql } from 'apollo-server-express';

const HikeTypes = gql`
    type Point {
        type: String!
        coordinates: [Float]!
    }

    input PointInput {
        type: String!
        coordinates: [Float]!
    }

    type Hike {
        id: ID!
        name: String
        length: Float
        type: String
        description: String
        country: String
        state: String
        startLocation: Point
    }
`;

const Queries = gql`
    type Query {
        hikes: [Hike!]!
    }
`;

const Mutations = gql`
    type Mutation {
        createHike(name: String!, length: Float!, type: String!, description: String!, country: String!, state: String, startLocation: PointInput!): Hike!
    }
`;

export const typeDefs = gql`
    ${Queries}
    ${HikeTypes}    
    ${Mutations}
`;