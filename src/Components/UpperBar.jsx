import React from "react";
import Foto from "./Foto";
import yo from '../MisDatos';

export default function UpperBar(){

    const {nombre, foto} = yo;

    return(<div className="upperBar">
        <div className="contenedor">
            <div>
                <Foto img={foto} nameFoto={nombre} />
                <p>{nombre}</p></div>

        </div>
    </div>)
}