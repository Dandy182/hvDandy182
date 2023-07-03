import React from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../Places/Landing";
import About from "../Places/About";

import {} from 'framer-motion';

export default function AnimateRoutes(){

    const location = useLocation();

    return(<Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path='/about' element={<About />} />
    </Routes>)
}