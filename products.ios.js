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
    backgroundColor: '#a1d3f7',
  }
});

export default class Products extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          We'll show products here
        </Text>
      </View>
    );
  }
}

// module.exports = Products;
