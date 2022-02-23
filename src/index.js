import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//Used GlobalStyle to reset the website css
const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: Avenir-Roman, sans-serif;
    color:#f9f9f9;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyles/>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
