import yo from '../MisDatos';
import Foto from "../Components/Foto";
import Boton from "../Components/Boton";
import {motion} from 'framer-motion';


export default function LandingPage(){

    const {nombre, aspiracion, foto} = yo;
    
    return (<motion.div className={"bg landing"} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="contenedor ub">
            <Foto sFoto="miFoto" img={foto} nameFoto={nombre} />
            <div className="infoBase">
                <p>Hola, soy</p>
                <h1>{nombre}</h1>
                <p>{aspiracion}</p>
                <Boton ruta={'/about'} styleButton={"btn btn__Contact effect"} />
            </div>
        </div>
    </motion.div>)

}