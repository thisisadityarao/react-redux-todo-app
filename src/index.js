import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { createGlobalStyle } from "styled-components";
import * as serviceWorker from './serviceWorker';


const GlobalStyle = createGlobalStyle`
  html {
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,              Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol", "Noto Color Emoji";
  }

  body {
    height: 100%;
    width: 100%;
    background-color: lightgoldenrodyellow;
  }
`;


ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
