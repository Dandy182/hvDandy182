import React from "react";
import {Route, Routes  } from "react-router-dom";
import './Styles/App.scss';
import LandingPage from "./Places/Landing";
import About from "./Places/About";

export default function App(){


    return(
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path='/about' element={<About />} />
        </Routes>

    )
}