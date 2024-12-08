
// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './page/Home';
import Details from './page/Details';
import Register from './page/register';
import Login from './page/Login';
import Service from './page/Service';0
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details1" element={<Details />} />
        <Route path="/Login1" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service1" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
