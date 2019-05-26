import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import LoginForm from './components/LoginForm'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <LoginForm />
      </div>
    </Provider>
  );
}

export default App;
