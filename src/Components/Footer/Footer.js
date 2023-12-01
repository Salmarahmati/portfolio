import React from "react";
import "./Footer.css"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer p-2 row">
            <div className="col-sm-12  text-center ">
                < a href="https://github.com/Salmarahmati"><FaGithub className="footerIcons" size={25} /></a>
                <a href="https://www.linkedin.com/in/salma-rahmati-b211a822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="footerIcons" size={25} /></a>
                <a href="https://twitter.com/slmarahmati?s=11&t=HaMYEluzzvobQV705V3tAA"> <FaXTwitter className="footerIcons" size={25} /></a>
                <a href="https://www.instagram.com/3almarahmati/"><FaInstagram className="footerIcons" size={25} /> </a>
            </div>
            <div className="col-sm-12 text-center"><LuCopyright /> 2023 by Salma Rahmati.</div>
        </footer >
    )
}
export default Footer;