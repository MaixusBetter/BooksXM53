import React from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

// Construct the main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql', // Ensure this matches your Apollo Server's GraphQL endpoint
});

// Add authentication to the request headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token'); // Ensure token is correctly stored
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '', // Attach token if present
    },
  };
});

// Create an Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Combine auth link and HTTP link
  cache: new InMemoryCache(), // Use in-memory cache for Apollo Client
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Navbar /> {/* Your navigation component */}
        <Outlet /> {/* Render the matched child route */}
      </>
    </ApolloProvider>
  );
}

export default App;
