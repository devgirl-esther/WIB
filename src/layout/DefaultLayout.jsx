import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";


const DefaultLayout = () => {
  return (
    <div>
        <div><Navbar/></div>
        <div><Outlet/></div>
        <div><Footer/></div>
      
    </div>
  )
};

export default DefaultLayout;

