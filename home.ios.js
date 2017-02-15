'use strict';

import React, { Component } from 'react';
import {
  AlertIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
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
    backgroundColor: '#d7ebf3',
  },
  lightButton: {
    backgroundColor: '#a1d3f7',
    padding: 10,
    width: 120,
    margin: 5,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'black'
  },
  heavyButton: {
    backgroundColor: '#3887b9',
    padding: 10,
    width: 120,
    margin: 5,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'black'
  },
  buttonText: {
    textAlign:'center',
  }
});

export default class Home extends Component {

  _onPressButtonDispense() {
    fetch("https://api-http.littlebitscloud.cc/v2/devices/00e04c02bca7/output", {
      method: "POST",
      headers: {
        "Authorization": "b5478bcd3b5ff33e5337d95b8d183b345358d42703515f45b2b4bdbdcf77a6c2",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "percent": 100,
        "duration_ms": 1600})})
    .then((response) => response.json())
    .then((responseData) => {
        AlertIOS.alert(
            "LaundroSmart Status",
            // "Response Body -> " + JSON.stringify(responseData)
            "Instructions received"
        );
        console.log(responseData);
    })
    .done();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>LaundroSmart Dispenser Controls</Text>
        <TouchableHighlight
        onPress={this._onPressButtonDispense}
        style={styles.lightButton}>
          <Text style={styles.buttonText}>LIGHT LOAD</Text>
        </TouchableHighlight>
        <TouchableHighlight
        onPress={(event) => {
        this._onPressButtonDispense();
        setTimeout (() => this._onPressButtonDispense(), 3500);}}
        style={styles.heavyButton}>
          <Text style={styles.buttonText}>HEAVY LOAD</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// module.exports = Home;
