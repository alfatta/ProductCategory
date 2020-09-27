import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Header } from './src/components/common';
import CategoryList from './src/components/CategoryList'

import reducers from './src/reducers'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Header title="Product Category" />
        <CategoryList />
      </Provider>
    )
  }
}

export default App