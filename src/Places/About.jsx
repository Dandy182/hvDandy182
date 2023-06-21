import React from "react";
import UpperBar from "../Components/UpperBar";


export default function About(){

    return(
    <div className="about bg">
        <UpperBar />
        <main className="contenedor">
            <article className="info__about">
                <h2>Sobre mi</h2>

            </article>
            <article className="info__about">
                <h2>Tecnologias con las he trabajado</h2>
            </article>
        </main>
        <div className="bg__portafolio">

        </div>
        
        </div>)
}