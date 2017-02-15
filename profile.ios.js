'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3887b9',
  }
});

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          User profile goes here
        </Text>
      </View>
    );
  }
}

// module.exports = Products;
