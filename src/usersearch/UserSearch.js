import React from 'react'
import { graphql } from "react-apollo";
import { Box, Flex } from 'grid-styled'
import MyInput from './MyInput'
import GITHUB_USER_QUERY from './GitHubUser.graphql'


class UserSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      githubusername: ''
    }
    console.log('in usersearch')
  }

  onChange = (event) => {
    this.setState({githubusername: event.target.value})
  }

  onEnter = (event) => {
    console.log(event.target.value)
    fetchGitHubUser(event.target.value)
  }

  render() {
    return(
      <Flex>
        <Box width={1 / 2}>Is that dev scoring </Box>
        <Box><MyInput
          value={this.state.githubusername}
          onChange={this.onChange}
          onEnter={this.onEnter}
        />
        </Box>
      </Flex>
    )
  }
}

const fetchGitHubUser = graphql(GITHUB_USER_QUERY, {
  options: { variables: { username: 'tschortsch' } }
})

export default fetchGitHubUser(UserSearch)
