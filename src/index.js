import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// "homepage": "http://lexapetrov.github.io/obs-subs",
import Layout from './components/Layout'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>, document.getElementById('root')
);
serviceWorker.unregister();
