import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";
import CreateUser from "./components/create-user.component";


import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
 import Navigation from './navigation';




ReactDOM.render(

  
   <Router>
     <Routes>
     <Route exact path='/' element={<Navigation/>} />
      <Route path="/create-user" element={<CreateUser/>} />
      {/* <Route exaxt path="/" element={<CreateUser/>} /> */}
      <Route path="/edit-user/:id" element={<EditUser/>} />
      <Route path="/user-list" element={<UserList/>} />
     </Routes>
 </Router>
   , document.getElementById('root'));


  

   