import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// Pages
import App from './pages/home';
import Template from './pages/template';
import Collection from './pages/collection';
// import CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='https://khalilettkhyly.github.io/Resume-Builder/'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="template/:id" element={<Template />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
