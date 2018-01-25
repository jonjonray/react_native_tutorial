import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: "", error: "", loading: false};
  }

  onButtonPress(){
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail(){
    this.setState({
      loading: false,
      password: "",
      error: "Wrong info provided"
    });
  }

  onLoginSuccess(){
    this.setState({
      loading: false,
      email: "",
      password: ""
    });


  }

  renderButton(){
    if (this.state.loading) {
      return <Spinner size="small" />;
    } else {
      return (
        <Button
          onPress={this.onButtonPress.bind(this)}>
          Log In
        </Button>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            value={this.state.email}
            label={"Email"}
            onChangeText={email => this.setState( { email })}
             />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            />
        </CardSection>

        <Text
          style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
