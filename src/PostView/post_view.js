import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Card from "../Card/card";


const Postview = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://photoshare-app.onrender.com/form-data")

            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                }
            });
    });

    return (
        <>
            <Header />
            {/* <Userform /> */}
            <div>
                {posts.map((user, i) => {
                    return <Card post={user} key={i} />;
                })}
            </div>
        </>
    );
};

export default Postview;