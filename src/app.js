import React from "react";
import { Router, Route, Routes  } from "react-router-dom";
import './Styles/App.scss';
import LandingPage from "./Places/Landing";

export default function App(){


    return(
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
        </Routes>

    )
}