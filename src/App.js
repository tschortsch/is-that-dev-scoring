import React, { Component } from 'react';
import logo from './logo.svg';
import { Box, Flex } from 'grid-styled'
import MyInput from './MyInput'
import styled from 'styled-components'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      githubusername: ''
    }
  }

  onChange = (event) => {
    this.setState({ githubusername: event.target.value })
  }

  onEnter = () => {
    console.log('asdf')
  }

  render() {
    return (
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
    );
  }
}

export default App;
