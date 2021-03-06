const { typeDefs } = require('./graphql-schema');
const { ApolloServer } = require('apollo-server');
const neo4j = require('neo4j-driver');
const { Neo4jGraphQL } = require('@neo4j/graphql');
const dotenv = require('dotenv');

// set environment variables from .env
dotenv.config();

/*
 * Create a Neo4j driver instance to connect to the database
 * using credentials specified as environment variables
 * with fallback to defaults
 */
const driver = neo4j.driver(
  process.env.NEO4J_URI || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'neo4j'
  )
);

/*
 * Create an executable GraphQL schema object from GraphQL type definitions
 * including autogenerated queries and mutations.
 * Read more in the docs:
 * https://neo4j.com/docs/graphql-manual/current/
 */
const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
});

/*
 * Create a new ApolloServer instance, serving the GraphQL schema
 * created using Neo4jGraphQL ctor above and injecting the Neo4j driver
 * instance into the context object so it is available in the
 * generated resolvers to connect to the database.
 */
const server = new ApolloServer({
  context: {
    driver,
    driverConfig: { database: process.env.NEO4J_DATABASE || 'neo4j' },
  },
  schema: neoSchema.schema,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
