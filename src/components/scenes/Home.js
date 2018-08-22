
// TODO : finir linker app with redux to manage
// isLoginVisible

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from 'react-native-dotenv';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon } from 'native-base';
import MapContainer from './components/MapContainer';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class Home extends Component {

  state = {
    isLoginVisible: false,
  }

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey:API_KEY,
        authDomain:AUTH_DOMAIN,
        databaseURL:DATABASE_URL,
        projectId:PROJECT_ID,
        storageBucket:STORAGE_BUCKET,
        messagingSenderId:MESSAGING_SENDER_ID
      }
    );
  }

  onLoginPress() {
    this.setState({ isLoginVisible:true });
  }

  loginUser() {

  }



  cancelLogin() {
    this.setState({ isLoginVisible: false});
  }

  render() {

    const { container, headerStyle, title, buttonStyle } = styles;
    return (
      <Provider store={store}>
      <Container>
        <Header style={headerStyle}>
          <Left>
            <Text style={{color:'white'}}>Log out</Text>
          </Left>
          <Body>
          <Title style={title}>ThroneAdvisor</Title>
          </Body>
          <Right>
            <Button transparent>
            <Icon type="MaterialIcons" name="add" style={{ color:'white'}} />
            </Button>
          </Right>
        </Header>
        <View style={container}>
          <MapContainer />
        </View>
        <Footer>
          <FooterTab>
            <Button
              onPress={ this.onLoginPress.bind(this)}
              block
              style={buttonStyle}>
              <Text style={title}>Log In</Text>
            </Button>
          </FooterTab>
        </Footer>
        <LoginForm
        visible={ this.state.isLoginVisible }
        onCancelLogin={this.cancelLogin.bind(this)}
        />
      </Container>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    paddingTop: 30,
    backgroundColor: '#31BA82'
  },
  title: {
    color: 'white',
    fontSize: 16
  },
  buttonStyle: {
    backgroundColor: '#31BA82',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10

  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});

export { Home };
