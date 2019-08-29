import React from 'react';

import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import './config/ReactotronConfig';
import store from './store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    </>
  );
}
