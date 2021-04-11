import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"/>
            
            <div className="nav__bello">
            <img className="nav__bello-content"
            src="https://avatars.githubusercontent.com/u/74531512?s=460&u=5145180824b8f207a88a1f6c82125071755bd5f9&v=4"
            alt="Bello png"/>
            <p className="comment"> scorll and double tap on movie to wacth trailer and also too close.</p>
            </div>
            
        </div>

        
    )
}

export default Nav;