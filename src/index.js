import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';

import PageRoute from './pages/PageRoute';
import PageRoute2 from './pages/PageRoute2';

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Layout from './layout/Layout';

//import Route from './Route';
import Route2 from './Route2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="pageroute" element={<PageRoute />} />
      <Route path="pageroute2" element={<PageRoute2 />} />
      <Route path="route2" element={<Route2 />} />
    </Route>
  </Routes>
</BrowserRouter>

/*<React.StrictMode>
    <Route />
    <Route2 />
  </React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
