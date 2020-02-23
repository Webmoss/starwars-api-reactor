import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo-client';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';


class MyApp extends App {
  render() {
    const { Component, pageProps, apollo, store } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider then
// Wraps all components in the tree with the Redux Provider
export default withData(withRedux(initStore)(MyApp));
