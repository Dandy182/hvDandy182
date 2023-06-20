import React from "react";
import { Link } from "react-router-dom";

export default function Boton(route, textBoton){

    return(<Link to={route} className="btn"><span>{textBoton}</span></Link>)
}