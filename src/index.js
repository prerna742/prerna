import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
 import Wel from './Wel';
 import Footer from './Footer';
import Nav from './Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


  <div>
  <Nav/>
 <App/>
 <Wel/>
 <Footer/>






  </div>
    
  </React.StrictMode>
);

