import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import { ApolloProvider } from '@apollo/client';
import { createHttpLink,ApolloClient,InMemoryCache } from '@apollo/client/core';

function App() {

  const httpLink = createHttpLink({
    uri: 'http://localhost:8080/query', // Replace with your Go backend's GraphQL endpoint
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
