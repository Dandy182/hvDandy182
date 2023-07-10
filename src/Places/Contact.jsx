import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import UpperBar from "../Components/UpperBar"


export default function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yrz09mh', 'template_iir9nri', form.current, 'SAZkFL4g04dO3k8vq')
          .then((result) => {
            alert(`Correo enviado de manera satisfactoria`)
              console.log(result.text);
          }, (error) => {
            alert(`error al enviar correo`)
              console.log(error.text);
          });
      };


    return(<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <UpperBar />
        <div className="contenedor projects">
            <h2>Contacto</h2>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                <div className="campo">
                    <label htmlFor="user_name">Nombre: </label>
                    <input type="text" name="user_name" className="nombre" placeholder="su nombre" />
                </div>
                <div className="campo">
                    <label htmlFor="user_email">Correo: </label>
                    <input type='email' name="user_email" className="correo" placeholder="su correo" />
                </div>
                <div className="campo">
                    <label htmlFor="mensaje">Mensaje: </label>
                    <textarea className="message" name="message"/>
                </div>

                <input type="submit" value='enviar' className="btn btn__Contact btn_form" />
            </form>
        </div>

    </motion.div>)
}