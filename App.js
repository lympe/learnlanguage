import React, { Component } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import Nav from './src/screens/Nav';
import { store, persistor } from './ConfigureStore';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Nav />
        </PersistGate>
      </Provider>
    );
  }
}
