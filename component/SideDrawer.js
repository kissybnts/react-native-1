import React from 'react';
import { View, StyleSheet, Image, Text, Button, Alert } from 'react-native';

const sideDrawer = (props) => {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.sideDrawerView}
            >
                <View
                    style={styles.headerView}
                >
                    <View
                        style={profileStyle.profileView}
                    >
                        <Image 
                            style={profileStyle.profileImage}
                            source={require('./assets/profiledefault.png')}
                        />
                        <View
                            style={profileStyle.textView}
                        >
                            <Text style={profileStyle.text}>User Name</Text>
                            <Text style={profileStyle.text}>fstt.fwmym.f15@gmail.com</Text>
                        </View>
                    </View>
                    <View
                        style={profileStyle.controlsView}
                    >
                        <Text
                            style={profileStyle.loginButton}
                            onPress={() => Alert.alert('Login button')}
                        >
                            Login
                        </Text>
                        <Image source={require('./assets/addchannelbutton.png')} style={{height: 17, width: 17, marginRight: 10, marginTop: 5}}/>
                    </View>
                </View>
                <View
                    style={styles.listView}
                >
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    sideDrawerView: {
        flex: 1,
        width: 250
    },
    headerView: {
        flex: 3,
        backgroundColor: 'steelblue',
    },
    listView: {
        flex: 7,
        backgroundColor: 'white'
    }
});

const profileStyle = StyleSheet.create({
    profileView: {
        flex: 7,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    controlsView: {
        flex: 3,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    },
    textView: {
        height: 50,
        width: 180,
        justifyContent: 'center'
    }, 
    text: {
        fontSize: 12,
        color: 'white'
    },
    loginButton: {
        color: 'white', 
        fontSize: 15, 
        width: 70, 
        textAlign: 'center'
    },
    addChannelButton: {
           
    }
});

export default sideDrawer;