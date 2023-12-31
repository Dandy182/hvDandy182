import React from "react";
import UpperBar from "../Components/UpperBar";
import Datos from '../MisDatos';
import {motion} from 'framer-motion'

export default function About(){

    return(
    <motion.div className={"bg about"}>
        <UpperBar />
        <main className="contenedor">
            <article className="info__about">
                <h2>Sobre mi</h2>
                <div className="aboutMe">
                    <div className="info">
                       {Datos.about.map((dato, i) => <p className="parrafo" key={i}>{dato}</p>)}
                       <div className="btn-About">
                            <a href={Datos.hv} download={'curriculm'} className={"btn btn__Contact effect"} ><span>Mi Curriculum</span></a>
                       </div>
                    </div>
                </div>
            </article>
            <article className="info__about">
                <h2>Tecnologías </h2>
                <div className="misTecnologias">
                    {Datos.tecnologias.map((t, index) => {
                        return <div key={index} className="campoTeconologia">
                            <img src={t.img} alt={t.nombre} />
                            <p className="textTech">{t.nombre}</p> 
                            </div>})}
                </div>
            </article>
        </main>
        
        </motion.div>)
}