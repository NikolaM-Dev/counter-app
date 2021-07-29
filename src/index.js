import React from 'react';
import ReactDOM from 'react-dom';

// import CounterApp from './components/CounterApp';
import FirstApp from './components/FirstApp';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <CounterApp value={18} /> */}
    <FirstApp greeting="Hi, i'm Nikola" />
  </React.StrictMode>,
  document.querySelector('#root')
);
