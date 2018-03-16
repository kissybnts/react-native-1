import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';

const channel = (props) => {
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.titleView}
      >
        <Text
          style={styles.title}
        >
          {props.channel ? props.channel.name : 'Please Log In'}
        </Text>
      </View>
      <View
        style={styles.messageView}
      >
        <Text>dummy</Text>
      </View>
      <View
        style={styles.inputView}
      >
        <TextInput
          placeholder={'message'}
          style={styles.messageInput}
        />
        <Button
          title="Send"
          onPress={() => Alert.alert('Send')}
          style={{flex: 1}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleView: {
    flex: 1,
    justifyContent: 'center'
  },
  messageView: {
    flex: 8
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  title: {
    color: 'gray',
    fontSize: 18
  },
  messageInput: {
    flex: 9, 
    marginLeft: 10, 
    marginTop: 10, 
    paddingBottom: 5, 
    borderBottomColor: 'gray', 
    borderBottomWidth: 1, 
    fontSize: 16
  }
});

export default channel;