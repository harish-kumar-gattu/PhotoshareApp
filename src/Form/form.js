import React from 'react'
import "./form.css"
import { useNavigate } from 'react-router-dom';

const Userform = () => {
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();

        navigate(`/posts`);

    }
    return (
        <div className='form-container'>
            <form action='https://photoshare-app.onrender.com/form-data' method='POST' encType='multipart/form-data' >
                <input className='file-input' type="file" name="PostImage" /><br />
                <input type="text" name='name' placeholder='name' />
                <input className='file-location' type="text" name='location' placeholder='location' /><br />
                <input className='file-desc' type="text" name='description' placeholder='description' /><br />
                <button type="submit" onSubmit={onSubmit}>Post </button>
            </form>
        </div>
    )
}

export default Userform;