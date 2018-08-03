import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-native';
import { emailChanged, passwordChanged } from '../actions';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onCancelPress() {

  }


  render() {
      const { inputStyle, containerStyle, buttonStyle } = styles;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {}}
      >
        <Container style={containerStyle}>
          <Form>
            <Item>
              <Input
                style={inputStyle}
                placeholder="Email"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </Item>
            <Item last>
              <Input
                style={inputStyle}
                placeholder="Password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </Item>
            <Button
            block
            style={buttonStyle}
            >
              <Text>Login</Text>
            </Button>
            <Button
          block
          style={buttonStyle}
          onPress={this.props.onCancelLogin}
          >
              <Text>Cancel</Text>
            </Button>
          </Form>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged
})(LoginForm);

const styles = {
    containerStyle: {
        backgroundColor: 'rgba(250, 250, 250, 0.75)',
        flex: 1,
        justifyContent: 'center',
      },
    buttonStyle: {
        backgroundColor:'#31BA82',
        marginTop:10,
        marginBottom: 10
    },
    inputStyle: {
        backgroundColor:'white',
    }
}

