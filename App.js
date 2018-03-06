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
            Login
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
              placeholderTextColor="ghostwhite"
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
              placeholder="Please enter your password."
              placeholderTextColor="ghostwhite"
              onChangeText={(password) => this.setState({password})}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{color: 'white', textAlign: 'center', backgroundColor: 'pink', width: 100, height: 40, fontSize: 18, paddingTop: 8}}
              onPress={() => Alert.alert('Login with ' + this.state.email + ' & ' + this.state.password)}
            >
              Login
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{color: 'white', textAlign: 'center', height: 40, fontSize: 12, paddingTop: 12, paddingLeft: 5, paddingRight: 5}}
              onPress={() => Alert.alert('Go to reset password page!')}
            >
              Forgot password?
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{ color: 'white', top: 40, backgroundColor: 'gray', textAlign: 'center', width: '100%', height: 60, justifyContent: 'center', paddingTop: 20 }}
            onPress={() => Alert.alert('Go to SignUp page')}
          >
           アカウントをお持ちでない方はこちら 
          </Text>
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
