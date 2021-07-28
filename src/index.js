import React from 'react';
import ReactDOM from 'react-dom';

import CounterApp from './components/CounterApp';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={18} />
  </React.StrictMode>,
  document.querySelector('#root')
);
