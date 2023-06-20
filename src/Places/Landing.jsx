import React from "react";
import miFoto from '../img/FotoII.png';
// import { NavLink } from "react-router-dom";



export default function LandingPage(){
    
    return (<div className="bg">
        <aside>
        </aside>
        <div className="contenedor ub">
            <img className="miFoto" src={miFoto} alt="mi foto"/>
            <div className="infoBase">
                <p>Hola, me llamo</p>
                <h1>Daniel Yesid Cely Robayo</h1>
                <p>FrontEnd Developer</p>
            </div>
            {/* <NavLink to='/'  /> */}
        </div>
    </div>)

}