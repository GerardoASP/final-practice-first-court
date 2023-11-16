import React from 'react';
import './App.scss';

import PoliticalMenu from './components/PoliticalMenu/PoliticalMenu';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PresentationComponent from './components/PresentationComponent/PresentationComponent';
import HomeUser from './components/HomeUser/HomeUser';
import ListUser from './components/ListUser/ListUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PresentationComponent />}/>
          <Route path="/policies" element={<PoliticalMenu />} ></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/HomeAdmin' element={<Home />}></Route>
          <Route path='/HomeUser' element={<HomeUser/>}/>
          <Route path='/ListUser' element={<ListUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
