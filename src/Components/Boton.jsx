import { NavLink } from "react-router-dom";




export default function Boton({ruta, styleButton}){

    return(<NavLink to={ruta} className={styleButton}><span>Contactame</span></NavLink>)
}