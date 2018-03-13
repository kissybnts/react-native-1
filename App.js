import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './container/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Smack App</Text>
        </View>
        <View style={styles.body}>
          <Login/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'center'
  },
  headerText: {
    top: 10,
    left: 10,
    fontSize: 15,
    color: 'white'
  },
  body: {
    flex: 9,
  }
});
