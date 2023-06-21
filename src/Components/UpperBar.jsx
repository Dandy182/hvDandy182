import React from "react";
import Foto from "./Foto";
import yo from '../MisDatos';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";


export default function UpperBar(){

    const {nombre, foto, github, linkedIn} = yo;

    return(<nav className="upperBar">
        <div className="contenedor bar">
            <div className="uppLeft">
                <Foto img={foto} nameFoto={nombre} sFoto={'upperBar__foto'} />
                <p>{nombre}</p>
                </div>
            <div className="uppRight">
                <Link target="_blank" className="icon" to={github}>
                    <FontAwesomeIcon className="svg" icon={faGithub} />
                </Link>
                <Link to={linkedIn} className="icon" target="_blank">
                    <FontAwesomeIcon className="svg" icon={faLinkedinIn} />
                </Link>
            </div>
        </div>
    </nav>)
}