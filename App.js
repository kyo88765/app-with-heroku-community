import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import CustomWebView from "react-native-webview-android-file-upload";
import { Text, View, Platform, WebView } from 'react-native';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    if (Platform.OS === 'ios')
      return (
        <WebView
          source={{ uri: "http://35.200.99.144:3000/view/signup" }}
          style={{ marginTop: 20 }}
          allowsInlineMediaPlayback={true}
        />
      );
    else {
      return (
        <CustomWebView
          source={{ uri: "http://35.200.99.144:3000/view/signup" }}
          style={{ marginTop: 20 }}
          allowsInlineMediaPlayback={true}
        />
      );
    }
  }
}