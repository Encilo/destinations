import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import AppContainer from './containers/app';
import thunkMiddleware from 'redux-thunk';

// Configure redux logger (logging is enabled only in dev mode)
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// Configure the store
function configureStore(initialState) {

  // Enhancer represents app middleware 
  // so far we have configured to user logger (it will log any redux event) and we used thunk as well for async calls to external sources
  // from our actions
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

// Defining initial state
const initialState = {
  forgotPasswordModal: {
    isVisible: false
  },
  termsAndConditionsModal: {
    isVisible: false
  }
}

const store = configureStore(initialState);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
