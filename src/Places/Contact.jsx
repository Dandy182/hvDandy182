import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import UpperBar from "../Components/UpperBar"


export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return(<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <UpperBar />
        <div className="contenedor projects">
            <h2>Contacto</h2>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                <div className="campo">
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" name="nombre" className="nombre" placeholder="su nombre" />
                </div>
                <div className="campo">
                    <label htmlFor="correo">Correo: </label>
                    <input type='email' name="correo" className="correo" placeholder="su correo" />
                </div>
                <div className="campo">
                    <label htmlFor="mensaje">Mensaje: </label>
                    <textarea className="textMensaje"/>
                </div>

                <input type='submit' value='enviar' className="btn btn__Contact" />
            </form>
        </div>

    </motion.div>)
}