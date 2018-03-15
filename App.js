import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './container/Login';
import SideDrawer from './component/SideDrawer';
import { DrawerNavigator } from 'react-navigation';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text 
            style={styles.headerText}
            onPress={() => this.props.navigation.navigate('DrawerToggle')}
          >
            Smack App
          </Text>
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

const MyApp = DrawerNavigator({
  Home: App
}, {
  contentComponent: SideDrawer
});

export default MyApp;