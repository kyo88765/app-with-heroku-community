import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import WKWebView from 'react-native-wkwebview-reborn';
import CustomWebView from "react-native-webview-android-file-upload";
import FCM from 'react-native-fcm';
import { Text, View, Platform, WebView } from 'react-native';

export default class App extends Component {

  componentDidMount() {
    FCM.requestPermissions();
    FCM.getFCMToken().then(token => console.log(`[TOKEN] ${token}`));
    if (Platform.OS === "ios") {
      FCM.getAPNSToken().then(token => {
        console.log("APNS TOKEN (getFCMToken)", token);
      });
    }
    this.notificationUnsubscribe = FCM.on('FCMNotificationReceived', (notif) => {
      console.log("Received");
      // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
    });
    this.refreshUnsubscribe = FCM.on('FCMTokenRefreshed', (token) => {
      console.log(token)
      // fcm token may not be available on first load, catch it here
    });

    SplashScreen.hide();
  }

  componentWillUnmount() {
    this.refreshUnsubscribe();
    this.notificationUnsubscribe();
  }

  render() {
    if (Platform.OS === 'ios')
      return (
        <WKWebView
          source={{ uri: "https://commune.dayone.jp/view/signup" }}
          style={{ marginTop: 20 }}
          allowsInlineMediaPlayback={true}
        />
      );
    else {
      return (
        <CustomWebView
          source={{ uri: "https://commune.dayone.jp/view/signup" }}
          style={{ marginTop: 20 }}
          allowsInlineMediaPlayback={true}
        />
      );
    }
  }
}