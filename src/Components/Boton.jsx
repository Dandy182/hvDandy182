import { NavLink } from "react-router-dom";




export default function Boton({ruta='#', styleButton, label}){

    return(<NavLink to={ruta} className={styleButton}><span>{label}</span></NavLink>)
}