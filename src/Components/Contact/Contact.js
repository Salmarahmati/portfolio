import React, { useRef } from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xcmlb7e', 'template_5f00ng8', form.current, '-tn2ifgg8LZoSIPcibraI')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent !")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact" className="pb-5 mb-5">
            <h1 className="w-100 text-center mb-5">Contact <span className="m"> Me</span></h1>
            <div className="row m-2 mb-5">
                <div className="col-sm-1 m-4"></div>
                <div className="col-sm-5 p-2 mb-4">
                    <ul className="touch">
                        <li><FaPhoneAlt /> +93790227026</li>
                        <li><IoMail /> slmarahmati2001@gmail.com</li>
                        <li><FaGithub />  Salmarahmati</li>
                        {/* <li><FaLinkedin /> </li> */}
                        <li><FaMapMarkerAlt /> Code To Inspir, Herat, Afghanistan</li>
                    </ul>
                    <iframe
                        className="w-75 m-3"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.7448786267896!2d62.20183387474006!3d34.35697050158017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce6f0921741e9%3A0xcde7ec19d97e6c22!2sCode%20To%20Inspire!5e0!3m2!1sen!2s!4v1700309503559!5m2!1sen!2s"
                        title="My location"
                        frameborder="0"
                        allowfullscreen
                        loading="eager"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="col-sm-4 text-center">
                    <span className="contactDesc">Please fill out the form below to discuss any work opportunaties.</span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder="Your Name" name="your_name" />
                        <input type="email" className="email" placeholder="Your Email" name="your_email" />
                        <textarea name="message" rows="5" className="msg" placeholder="Your Message"></textarea>
                        <button type="submit" value="Send" className="submitBtn">< GrSend /> Submit</button>


                        {/* <div className="links">

                        </div> */}
                    </form>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </section>
    )
}
export default Contact;



