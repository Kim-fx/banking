import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Covid from './components/Covid';
import Card from './components/Card';
import Greeting from './components/Greeting';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <NavBar/>
    <Banner/>
    <Covid/>
    <Greeting/>
    <Card/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
