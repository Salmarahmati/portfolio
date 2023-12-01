import React from "react";
import "./Skills.css"

export default function Skills() {
    return (
        <div id="skills" className="mt-5 row p-4">
            <div className="col-sm-1"></div>
            <div className="col-sm-4 pt-5">
                <h1 className="skills-page mt-4 pt-5">My <span className="sk">Skills</span></h1>
                <p className="skill-desc">
                    " Ok, I am a web developer with a strong proficiency in HTML, CSS, JavaScript, and various front-end frameworks such as React, Bootstrap and many more.
                    I am also skilled in troubleshooting and debugging issues, as well as collaborating with designers to bring their vision to life.My ability to adapt to new technologies and learn quickly
                    has allowed me to stay ahead in this fast-paced industry."
                </p>
            </div>
            <div className="mt-5 bars col-sm-4 ">
                <div className="skill-box">
                    <span className="title">HTML</span>
                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">90%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">CSS</span>
                    <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">85%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">BootStrap</span>
                    <div className="skill-bar">
                        <span className="skill-per bootstrap">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">JavaScript</span>
                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">React</span>
                    <div className="skill-bar">
                        <span className="skill-per react">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
    )
}