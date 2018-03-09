import React, { Component } from 'react';
import logo from './logo.svg';
import { Box, Flex } from 'grid-styled'
import MyInput from './MyInput'
import styled from 'styled-components'
import { graphql, gql, ApolloProvider } from 'react-apollo'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      githubusername: ''
    }
    console.log(fetchGitHubUser());
  }

  onChange = (event) => {
    this.setState({ githubusername: event.target.value })
  }

  onEnter = () => {
    console.log('asdf')
  }

  render() {
    return (
      <ApolloProvider client={this.props.client}>
        <div className="App">
          <Flex>
            <Box width={1 / 2}>Is that dev scoring </Box>
            <Box><MyInput
              value={this.state.githubusername}
              onChange={this.onChange}
              onEnter={this.onEnter}
            />
            </Box>
          </Flex>
        </div>
      </ApolloProvider>
    );
  }


}

const GITHUB_QUERY = gql`{
   query githubUser($username: String!) {
       user(login: $username) {
           name,
           location,
           avatarUrl,
           bio,
           createdAt,
           url,
           followers {
               totalCount
           },
           organizations {
               totalCount
           },
           repositories(first: 100) {
               totalCount,
               nodes {
                   stargazers {
                       totalCount
                   }
               }
           },
           repositoriesContributedTo(first: 100) {
               totalCount,
               nodes {
                   languages(first: 10) {
                       edges {
                           size,
                           node {
                               name
                           }
                       },
                   }
               }
           },
       }
   }}`;

const fetchGitHubUser = graphql(GITHUB_QUERY, {
  options: { variables: { username: 'tschortsch' } }
})

export default App;
