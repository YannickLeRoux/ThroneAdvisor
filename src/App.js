import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Router, Stack, Scene } from 'react-native-router-flux;'
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

import { Login, Home, UserDetails, ThroneDetails, Favorites } from './components/scenes';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

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

  render() {

    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="login" component={Login} title="ThroneAdvisor" />
            <Scene key="home" component={Home} title="Welcome Back!" />
            <Scene key="userDetails" component={UserDetails} title="Your Profile"/>
            <Scene key="throneDetails" component={ThroneDetails} title="Rate It!"/>
            <Scene key="favorites" component={Favorites} title="Your Favorites" />
          </Stack>
        </Router>

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

export default App;
