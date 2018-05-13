import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
// The client is what is interactiing with our graphql
// server on the backend.
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';


// Apollo makes the asumption of how the graphql server
// is setup.
const client = new ApolloClient({
  // This takes every single piece of data on our Apollo backend
  // This is used to identify the object in the Apollo store/client
  // This only works if our id's are unique in our application
  // The downside of this is that all of our queries must have an id
  // If it doesn't, Apollo will not be able to identify that 
  // piece of data.
  // This is much more performant than doing the refetching.
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    // By convention, we typically place ApolloProvider on the outside
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <App>
          <Route path="/" component={App}>
            <IndexRoute component={SongList} />
          </Route>
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </App>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
