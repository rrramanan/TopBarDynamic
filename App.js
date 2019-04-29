import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation"
import Home from './src/Home'

class App extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

const stackNavigatorAbout = createStackNavigator({
  Home: { screen: Home }
})

export default createAppContainer(stackNavigatorAbout);