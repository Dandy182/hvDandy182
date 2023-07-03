import yo from '../MisDatos';
import Foto from "../Components/Foto";
import Boton from "../Components/Boton";




export default function LandingPage(){

    const {nombre, aspiracion, foto} = yo;
    
    return (<div className={"bg landing"}>
        <aside>
        </aside>
        <div className="contenedor ub">
            <Foto sFoto="miFoto" img={foto} nameFoto={nombre} />
            <div className="infoBase">
                <p>Hola, soy</p>
                <h1>{nombre}</h1>
                <p>{aspiracion}</p>
                <Boton ruta={'/about'} styleButton={"btn btn__Contact effect"} />
            </div>
        </div>
    </div>)

}