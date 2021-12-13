import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    overflow-x: hidden !important;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
  }
  
  div, section, button, figure, nav, menu {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
  }
  h1, h2, h3, h4, h5, p, menu {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
