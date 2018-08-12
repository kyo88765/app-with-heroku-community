import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Text, View, WebView } from 'react-native';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <WebView
        source={{ uri: "http://35.200.99.144:3000/view/signup" }}
        style={{ marginTop: 20 }}
        allowsInlineMediaPlayback={true}
      />
    );
  }
}