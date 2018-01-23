/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.body}>
        <Header style={styles.container} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
