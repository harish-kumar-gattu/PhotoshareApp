import React, { useState } from 'react'
import axios from "axios";
import "./form.css"
import { useNavigate } from 'react-router-dom';

const Userform = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({ PostImage: null, name: "", location: "", description: "" })
    let formData = new FormData();
    formData.append("PostImage", post.PostImage);
    formData.append("name", post.name)
    formData.append("location", post.location)
    formData.append("description", post.description)

    const apiEndPoint = 'https://photoshare-app.onrender.com/form-data';
    const config = {
        headers: { "content-type": "multipart/form-data" }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(apiEndPoint, formData, config)
            .then(res => {
                if (res.status === 200) {
                    navigate("/posts")
                }

            })
            .catch(error => console.log(error))
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} id="formInput" value="">
                <input name='PostImage' type="file" onBlur={(e) => {
                    setPost({ ...post, PostImage: e.target.files[0] })
                }} /><br />
                <input type="text" name='name' placeholder='name' onBlur={(e) => {
                    setPost({ ...post, name: e.target.value })
                }} />
                <input className='file-location' type="text" name='location' placeholder='location' onBlur={(e) => {
                    setPost({ ...post, location: e.target.value })
                }} /><br />
                <input className='file-desc' type="text" name='description' placeholder='description' onBlur={(e) => {
                    setPost({ ...post, description: e.target.value })
                }} /><br />
                <button type="submit" > Post </button>
            </form>
        </div>
    )
}

export default Userform;
