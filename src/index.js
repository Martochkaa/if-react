import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/Hotels.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/fonts.css';
import Top from './components/Top/Top';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HotelDetail from '../src/components/filter/HotelId/NewHotels';



ReactDOM.render(
  <BrowserRouter>
    <Top />
    <Switch>
        <Route exact patch = "/">
    <App />
        </Route>
        <Route exact patch = "hotels/{hotel-id}">
     <HotelDetail/>     
        </Route>
     </Switch>   
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
