import React from "react";
import {Link} from "react-router-dom";
import miFoto from '../img/FotoII.png';


export default function LandingPage(){
    
    return (<div className="contenedor">
        <div className="landing">
            <div className='imgPersona'>
                <img src={miFoto} alt='mi foto'/>
            </div>
            <div className="InfoLanding">
                <h1>Daniel Yesid Cely Robayo</h1>
                <p>Frontend Developer</p>
                <Link to='/' className='btn btn__Landing'>Conoceme</Link>
            </div>
        </div>
    </div>)

}