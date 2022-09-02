import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'https://tnicho.github.io/tim-nicholson-portfolio/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
