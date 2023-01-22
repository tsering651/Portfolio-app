
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import {Route,Routes } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    
      <>
      
        
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/Project' element={<Project/>}/>
           
       </Routes>
     

       
      </>
      
  );
}

export default App;
