import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import './App.css';
import UserSearch from './usersearch/UserSearch'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ApolloProvider client={this.props.client}>
        <div className="App">
          <UserSearch />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
