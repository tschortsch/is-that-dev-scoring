import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context';

const githubGraphQlLink = {
  uri: 'https://api.github.com/graphql',
  credential: 'include'
}
const githubAuthLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // TODO implement GitHub OAuth procedure
  const token = localStorage.getItem('itds-github-token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
const apolloClient = new ApolloClient({
  link: githubAuthLink.concat(createHttpLink(githubGraphQlLink)),
  cache: new InMemoryCache()
});

ReactDOM.render(<App client={apolloClient} />, document.getElementById('root'));
registerServiceWorker();
