/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class graphql_client extends Component {
 constructor() {
    super();
    this.state = {
      value: '',
    }
  }
  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch('http://192.168.42.16:4000/graphql?query={%20quotes%20}')
    .then(resp => {
      let response = JSON.parse(resp._bodyText)
      this.setState({ value: response.data.quotes });
    })
    .catch()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         QUOTES HARI INI :
        </Text>
        <Text style={styles.isi}>
          {this.state.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  isi: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('graphql_client', () => graphql_client);
