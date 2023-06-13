import React from "react";
import miFoto from '../img/FotoII.png';


export default function LandingPage(){
    
    return (<div>
        <div className="contenedor landing">
            <div className='imgPersona'>
                <img src={miFoto} alt='mi foto'/>
            </div>
            <div className="InfoLanding">
                <h1>Daniel Yesid Cely Robayo</h1>
                <p>FrontEnd Developer</p>
            </div>
        </div>
    </div>)

}