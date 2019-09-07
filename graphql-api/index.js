import { ApolloServer } from "apollo-server";

import typeDefs from "./types";
import Query from "./resolvers/queries";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
