import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Nav from "./layout/Nav";
import Home from "./pages/Home/Home";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <header>
        <Nav routes={ROUTES} brand={BRAND}></Nav>
      </header>
      <main>
        <Home></Home>
      </main>
    </ApolloProvider>
  );
};

const ROUTES = [
  {
    name: "The company",
    url: "/about-the-company"
  },
  {
    name: "How we work",
    url: "/how-we-work"
  },
  {
    name: "Contact us",
    url: "/contact-us"
  }
];

const BRAND = {
  url: "/",
  name: "spotaroom"
};

export default App;
