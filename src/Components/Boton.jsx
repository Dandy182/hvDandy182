import { NavLink } from "react-router-dom";




export default function Boton({ruta='#', download, styleButton, label}){

    return(<NavLink to={ruta} download={download} className={styleButton}><span>{label}</span></NavLink>)
}