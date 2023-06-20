import React from "react";
import miFoto from '../img/FotoII.png';
import { Link } from "react-router-dom";




export default function LandingPage(){
    
    return (<div className="bg">
        <aside>
        </aside>
        <div className="contenedor ub">
            <div className="miFoto">
                <img  src={miFoto} alt="mi foto"/>
            </div>
            <div className="infoBase">
                <p>Hola, soy</p>
                <h1>Daniel Yesid Cely Robayo</h1>
                <p>FrontEnd Developer</p>

                <Link to='/about' className="btn btn__Contact effect"><span>Contactame</span></Link>
            </div>
        </div>
    </div>)

}