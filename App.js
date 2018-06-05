import React, { Component } from 'react';
import app from '.src/login';
import app from '.src/flatlist';

import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class Login extends Component {
   render() {
     return (
       <ScrollView style={{ padding: 20 }}>
          <text style={{ fontSize: 27}}>
              Login
          </Text>
            <TextInput placeholder='Username' />
            <TextInput placeholder='Password' />
            <View style={{ margin: 20 }} />
            <Button onPress={this.props.onLoginPress}
              title="Login"
            />
    </ScrollView>
  );
}
