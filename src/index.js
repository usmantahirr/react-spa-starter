import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.scss';
import './icons';

import * as serviceWorker from './serviceWorker';

const render = () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
};

ReactDOM.render(<App />, document.getElementById('root'));

render();
serviceWorker.register();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
