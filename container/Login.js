import React, { Component } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            focused: ''
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
            <View style={styles.container}>
                <View style={styles.loginView}>
                    <TextInput
                        style={this.state.focused === 'email' ? selectorStyles.focusedInput : styles.input}
                        placeholder="email"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        onFocus={() => this.setState({focused: 'email'})}
                        onBlur={() => this.setState({focused: ''})}
                    />
                    <TextInput
                        style={this.state.focused === 'password' ? selectorStyles.focusedInput : styles.input}
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        onFocus={() => this.setState({focused: 'password'})}
                        onBlur={() => this.setState({focused: ''})}
                    />
                    <Text
                        style={styles.button}
                        onPress={this.onLoginPress}
                    >
                        Login
                    </Text>
                </View>
                <View style={styles.signUpView}>
                    <Text
                        style={styles.text}
                    >
                        Don't have an account?
                    </Text>
                    <Text
                        style={styles.button}
                        onPress={this.onSignUpPress}
                    >
                        Sign up here
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    loginView: {
        flex: 4,
        alignItems: 'center'
    },
    signUpView: {
        flex: 6,
        alignItems: 'center'
    },
    input: {
        width: 250,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingVertical: 2
    },
    button: {
        color: 'white',
        backgroundColor: 'steelblue',
        padding: 10,
        fontWeight: 'bold',
        width: 250,
        textAlign: 'center',
        marginVertical: 10
    },
    text: {
        color: 'gray'
    }
});

const selectorStyles = StyleSheet.create({
    focusedInput: {
        width: 250,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'skyblue',
        padding: 2
    }
});

export default Login;