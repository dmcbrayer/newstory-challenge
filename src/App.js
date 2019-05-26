import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import AppContainer from './AppContainer'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
