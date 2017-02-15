/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';
import Home from './home';
import Products from './products';
import Profile from './profile';


export default class LaundroSmart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          systemIcon="recents"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
              this.setState({
                  selectedTab: 'home',
              });
          }}>
            <Home/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'products'}
          systemIcon="featured"
          onPress={() => {
                this.setState({
                    selectedTab: 'products',
                });
          }}>
          <Products/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'profile'}
          systemIcon="contacts"
          onPress={() => {
                this.setState({
                    selectedTab: 'profile',
                });
          }}>
          <Profile/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('LaundroSmart', () => LaundroSmart);
