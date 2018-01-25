import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: ""};
  }

  onButtonPress(){
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
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

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
