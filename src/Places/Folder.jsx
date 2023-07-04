import React from "react";
import UpperBar from "../Components/UpperBar";
import {motion} from 'framer-motion'
import yo from '../MisDatos';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";




export default function Folder(){

    return(<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <UpperBar />
        <main className="contenedor projects">
            <h2>Mi Portafolio</h2>
            <div className="projectosGeneral">
                {
                    yo.portafolio.map((p, i) => {
                        return (<div><a href={p.link} className="linkProject" key={i} >
                            <div className="projectData" key={i}>
                                <img src={p.img} alt={p.nombre} />
                       </div>
                        </a>
                         <div className="cover" key={i}>
                            <p><span>Proyecto: </span> {p.nombre}</p>
                            <p><span>Tecnologias: </span> {p.tecnologias}</p>
                            <Link target="_blank" className="icon" to={p.github}>
                                <FontAwesomeIcon className="svg" icon={faGithub} />
                                <p>Repo</p>
                            </Link>
                            </div>
                        </div>)
                    })
  
                }
            </div>
        </main>
    </motion.div>)
}