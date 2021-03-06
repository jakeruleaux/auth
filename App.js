/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyCMX93bAzWqHFy4LgKfV-5sTn4_vNfXNKo",
    authDomain: "auth-1ae26.firebaseapp.com",
    databaseURL: "https://auth-1ae26.firebaseio.com",
    projectId: "auth-1ae26",
    storageBucket: "auth-1ae26.appspot.com",
    messagingSenderId: "950341292094"
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='AuthorIzation' />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
