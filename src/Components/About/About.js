import React from "react";
import "./About.css"
// import { FaToolbox } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import profile from "../../images/profile.png";
import { Link } from "react-scroll";

const About = () => {
    return (
        <section id="Intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm<span className="introName"> Salma</span><br />A Web developer. </span>
                <p className="introPara p-3">This is <span className="fullName">Salma Rahmati </span>a skilled web developer from <br />Herat, Afghanistan.
                    With a keen eye for detail and a love for<br />problem-solving, I strive to deliver high-quality web solutions<br /> that exceed client expectations.
                </p>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}  ><button className="btn btn-light  btns"><FaRegHandshake size={40} /></button></Link>
            </div>
            <div>
                <img src={profile} alt="profile" className="bg" />
            </div>
        </section>
    );
};
export default About;