import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Router from './Router';
import firebase from 'firebase';

export default class HelloWorldApp extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDbfAehujuS_Xj-MDsWwaGX8_9vteiGq2E",
      authDomain: "bizsns-87120.firebaseapp.com",
      databaseURL: "https://bizsns-87120.firebaseio.com",
      projectId: "bizsns-87120",
      storageBucket: "bizsns-87120.appspot.com",
      messagingSenderId: "40514002272",
      appId: "1:40514002272:web:ba43b1ad003a5187"
    });
  }

  render() {
    return (
      <Router/>
    );
  }
}
