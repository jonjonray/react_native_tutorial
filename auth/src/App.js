import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends React.Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBD6rqi4ZHf6BYZQnho8L9kqKH9AAokOwE",
      authDomain: "auth-4ba34.firebaseapp.com",
      databaseURL: "https://auth-4ba34.firebaseio.com",
      projectId: "auth-4ba34",
      storageBucket: "auth-4ba34.appspot.com",
      messagingSenderId: "231961880252"
    });
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}


export default App;
