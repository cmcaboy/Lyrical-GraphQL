import React from 'react';
import ReactDOM from 'react-dom';
// The client is what is interactiing with our graphql
// server on the backend.
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

// Apollo makes the asumption of how the graphql server
// is setup.
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
