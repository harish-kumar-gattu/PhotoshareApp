import React from "react";

import "./card.css";


const Card = ({ post }) => {
    console.log(`${post.PostImage}`);
    // let image = require(`${post.PostImage}`)
    return (
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header__name">{post.name}</div>
                        <div className="card-header__place">{post.location}</div>
                    </div>
                    <span className="card-header__ellipseh">
                        <img src={require("../images/ellipssis-h.png")} alt="horizontal ellipsis" />
                    </span>
                </section>
                <section className="card-image">
                    <img src={""+post.PostImage} alt="place" />
                </section>
                <section className="card-actions">
                    <span className="card-actions__heart">
                        <img src={require('../images/heart.png')} alt="heart icon" />
                    </span>
                    <span className="card-actions__share">
                        <img src={require("../images/share.png")} alt="share icon" />
                    </span>
                    <span className="card-actions__date">{post.date.slice(0, 10)}</span>
                </section>
                <section className="card-likes">{post.likes} likes</section>
                <section className="card-description">{post.description}</section>
            </section>
        </>
    );
};

export default Card;
