import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBD6rqi4ZHf6BYZQnho8L9kqKH9AAokOwE",
      authDomain: "auth-4ba34.firebaseapp.com",
      databaseURL: "https://auth-4ba34.firebaseio.com",
      projectId: "auth-4ba34",
      storageBucket: "auth-4ba34.appspot.com",
      messagingSenderId: "231961880252"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState( {loggedIn: false });
      }
    });
  }


  renderContent(){
    if (this.state.loggedIn) {
      return (
        <Button
          onPress={() => firebase.auth().signOut() }>
          Log Out
        </Button>
      );
    } else {
      return (
        <LoginForm />
      );
    }
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;
