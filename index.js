import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { typeDefs } from './apollo/typeDefs';
import { resolvers } from './apollo/resolvers';

dotenv.config();

const DB = process.env.DATABASE_URI
const PORT = process.env.PORT || 4000;

(async function startServer() {
    //config app
    const app = express();
    //config apollo server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    //let server start before applying middleware
    await server.start();

    server.applyMiddleware({ app });
    //connect to database
    await mongoose.connect(DB).then(() => console.log('Connected to DB'));
    //start server
    app.listen({ port: PORT }, () => {
        console.log(`GraphQL server running on http://localhost:${PORT}${server.graphqlPath}`);
    })
})();