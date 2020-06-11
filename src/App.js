import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux';
import InboxScreen from './InboxScreen/InboxScreen';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
