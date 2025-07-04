import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/Aboutus/Aboutus'
import Partner from './components/Pages/Partner/Partner'
import Event from './components/Pages/Events/Events';
import Community from './components/Pages/Community/Community';
import Blog from './components/Pages/Blog/Blog';
import Article from './components/Pages/Blog/Article';
import DefaultLayout from './layout/DefaultLayout';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <ToastContainer/>
        <Router>
        <Routes>
          <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} /> 
          <Route path="/events" element={<Event />} /> 
          <Route path="/community" element={<Community/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/article/:id" element={<Article />} /> 
          </Route>
        </Routes>
        </Router>
        </>
        
  );
};

export default App;
