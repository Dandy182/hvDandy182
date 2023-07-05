import React from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../Places/Landing";
import About from "../Places/About";

import {AnimatePresence} from 'framer-motion';
import Folder from "../Places/Folder";

export default function AnimateRoutes(){

    const location = useLocation();

    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path="/folder" element={<Folder />} />
        </Routes>
    </AnimatePresence>
    )
}