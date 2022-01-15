import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

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
    <BrowserRouter>
      <GlobalStyles/>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
