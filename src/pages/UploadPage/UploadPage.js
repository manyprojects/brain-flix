// import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import imageUpload from "../../assets/images/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";


const UploadPage = () => {
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const handleClick = (e) => {
        e.preventDefault();
        setState(true);
        const uploadObj = { title: e.target[0].value, description: e.target[1].value };
        const uploadVideo = async () => {
            try {
                axios.post(`${SERVER_URL}/videos`, uploadObj);
            } catch(err) {
                return <p>{`UploadPage: ${err.message}`} </p>
            }
        }
        uploadVideo();
        setTimeout(() => {
            setState(false);
            navigate('/');
        }, 1500);
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className='upload'>
            <hr className='upload__divider'></hr>
            <h1 className='upload__title'>Upload Video</h1>
            <hr className='upload__divider-tablet'></hr>
            <form onSubmit={handleClick} className='upload__form'>
                <section className='upload__section'>
                    <div className='upload__thumbnail'>
                        <h3 className='upload__heading'>VIDEO THUMBNAIL</h3>
                        <img className='upload__image' src={imageUpload} alt="uploaded images" />
                        {state && <div className='upload__alarm'>Upload Successful!</div>}
                    </div>
                    <div className='upload__input'>
                        <label className='upload__description-title' htmlFor='uploadText'>TITLE YOUR VIDEO</label><br />
                        <input className='upload__input-title' placeholder='Add a title to your video' required></input><br />
                        <label className='upload__description'>ADD A VIDEO DESCRIPTION</label><br />
                        <textarea className='upload__input-description' placeholder='Add a description to your video' required></textarea>
                    </div>
                </section>
                <hr className='upload__divider-tablet-below'/>
                <div className='upload__buttons'>
                    <button className='upload__publish' >PUBLISH</button>
                    <button className='upload__cancel' onClick={handleCancel}>CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default UploadPage;