import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onLoginPress() {
        Alert.alert('onLoginPress');
    }

    onSignUpPress() {
        Alert.alert('onSignUpPress');
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput
                        placeholder="email"
                        value={this.state.email}
                        onChange={(email) => this.setState({email})}
                    />
                    <TextInput
                        placeholder="password"
                        value={this.state.password}
                        onChange={(password) => this.setState({password})}
                    />
                    <Button
                        title="Login"
                        onPress={this.onLoginPress}
                    />
                </View>
                <View>
                    <Text>Don't have an account?</Text>
                    <Button
                        title="Sign up here"
                        onPress={this.onSignUpPress}
                    />
                </View>
            </View>
        );
    }
}

export default Login;