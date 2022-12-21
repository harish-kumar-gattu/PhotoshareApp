import React from 'react';
import "./landing_page.css";
import { Link } from 'react-router-dom';

const Landing_page = () => {
    return (
        <div className='container'>
            <img className="landing_img" src={require("../images/lens-1418954.png")} alt="lens image" />

            <p className='text'>10x Team 04</p><br />
            <Link to="posts">
                <button>Enter</button>
            </Link>
        </div>
    )
}

export default Landing_page;