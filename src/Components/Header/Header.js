import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { IoReorderFourOutline } from "react-icons/io5";

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbars');
    navbar.classList.toggle('.navbar-scroll', window.scrollY > 50);
});

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbars">
            {/* <img src={logo} alt="logo" className="logo" /> */}
            {/* <h1>|Salma Rahmati</h1> */}
            <h2><span className="s">S</span>ALMA <span className="dot">.</span></h2>

            <div className="desktopMenu">
                <Link activeClass="active" to="Intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItems" >About</Link>
                <Link activeClass="active" to="Edu" spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItems" >Education</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-47} duration={500} className="desktopMenuListItems" >Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItems" >Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-5} duration={500} className="desktopMenuListItems" >Contact</Link>
            </div>
            <IoReorderFourOutline size={50} className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
                <Link activeClass="active" to="Intro" spy={true} smooth={true} offset={-100} duration={500} className="listItems" onClick={() => setShowMenu(false)} >About</Link>
                <Link activeClass="active" to="Edu" spy={true} smooth={true} offset={-100} duration={500} className="listItems" onClick={() => setShowMenu(false)} >Education</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className="listItems" onClick={() => setShowMenu(false)} >Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="listItems" onClick={() => setShowMenu(false)} >Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-30} duration={500} className="listItems" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}
export default Header;