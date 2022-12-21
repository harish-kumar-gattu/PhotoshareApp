import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img className="logo_icon" src={require('../images/logo.png')} alt="logo" />
                    <p className="logo_content">Instaclone</p>
                </section>
                <section className="camera-icon">
                    <Link to="/form">
                        <img src={require("../images/camera.png")} alt="camera-icon" />
                    </Link>
                </section>
            </nav>
        </>
    );
};

export default Header;