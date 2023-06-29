import React from "react";
import UpperBar from "../Components/UpperBar";
import Datos from '../MisDatos';


export default function About(){

    return(
    <div className={"bg about"}>
        <UpperBar />
        <main className="contenedor">
            <article className="info__about">
                <h2>Sobre mi</h2>

            </article>
            <article className="info__about">
                <h2>Tecnologias </h2>
                <div className="misTecnologias">
                    {Datos.tecnologias.map((t, index) => {
                        return <div key={index} className="campoTeconologia">
                            <img src={t.img} alt={t.nombre} />
                            <p className="textTech">{t.nombre}</p> 
                            </div>})}
                </div>
            </article>
        </main>
        
        </div>)
}