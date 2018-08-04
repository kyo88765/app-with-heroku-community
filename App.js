import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "http://35.200.99.144:3000/view/signin" }}
        style={{ marginTop: 20 }}
      />
    );
  }
}