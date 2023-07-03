import React from "react";
import UpperBar from "../Components/UpperBar";
import {motion} from 'framer-motion'
import yo from '../MisDatos';

export default function Folder(){

    return(<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <UpperBar />
        <main className="contenedor spaced">
            <h2>Mi Portafolio</h2>
            <div className="projectosGeneral">
                {
                    yo.portafolio.map((p, i) => {
                        return (<a href={p.link} target="_blank">
                        <div className="projectData" key={i}>
                        <img src={p.img} alt={p.nombre} />
                       </div>
                        </a>)
                    })
  
                }
            </div>
        </main>
    </motion.div>)
}