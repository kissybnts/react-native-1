import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'flex-start', top: 30, left: 10 }}>
          <Button
            title="←"
            onPress={() => Alert.alert('Back to top page!')}
            color="white"
          />
        </View>
        <View style={{flex: 1, left: 20}}>
          <Text
            style={{ color: 'white', fontSize: 30}}
          >
            ログイン
          </Text>
        </View>
        <View style={{flex: 2, left: 20}}>
          <View style={{flex: 1,}}>
            <Text
              style={{ color: 'white', marginBottom: 10}}
            >
              Email
            </Text>
            <TextInput
              style={{ color: 'white', borderBottomColor: 'white', borderBottomWidth: 1, width: '85%', paddingBottom: 10}}
              placeholder="Please enter your email address."
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <View style={{flex: 1,}}>
            <Text
              style={{ color: 'white', marginBottom: 10}}
            >
              Password
            </Text>
            <TextInput
              style={{ color: 'white', borderBottomColor: 'white', borderBottomWidth: 1, width: '85%', paddingBottom: 10}}
              placeholder="Please enter your email address."
              onChangeText={(password) => this.setState({password})}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Button
            title="ログイン"
            color="white"
            onPress={() => Alert.alert('Login with ' + this.state.email + ' & ' + this.state.password)}
          />
          <Button
            title="Forgot password?"
            color="white"
            onPress={() => Alert.alert('Go to reset password page!')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  textInput: {
    width: 100,
    height: 40,
  },
  scrolItem: {
    fontSize: 40
  }
});
