import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UI from './UI/UI';
import rootReducer from '../rootReducer';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <div className="app">
      <UI />
    </div>
  </Provider>
);

export default App;
