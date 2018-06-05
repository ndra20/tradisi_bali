import  import React, { Component } from 'react';

 import { ScrolView, Text,TextInput,View, Button } from 'react-native';

 export default class Login extends Component {
   render() {
     return (
       <ScrolView style={{ padding: 20 }}>
       <text
          style={{ fondZise: 27}}>
        Login
        </Text>

        <TextInput placeholder='Username' />
        <TextInput placeholder='Password' />
        <View style={{ margin: 20 }} />
        <Button
        onPress={this.props.onLoginPress}
        title="Login"
        />
        </ScrolView>
     );
   }
