import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import { GlobalCss } from './GlobalCss';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
    <GlobalCss />
  </React.StrictMode>,
  document.getElementById('root')
);