import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import './config/ReactotronConfig';
import { store, persistor } from './store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </>
  );
}
