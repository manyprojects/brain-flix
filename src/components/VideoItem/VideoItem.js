import React from 'react';
import './VideoItem.scss';

const VideoItem = (props) => {
    const handleClick = (e) => {
        let selectedId =  e.target.id;
        console.log(selectedId === e.target.id);
        props.selectVideo(selectedId);
    }

    return (
        <li className='video-list'>
            <img id={props.id} onClick = {handleClick} src={props.image} className='video-list__image'/>
            <div className='video-list__text'>
                <p className='video-list__title'>{props.title}</p>
                <p>{props.channel}</p>
            </div>
        </li>
    );
};

export default VideoItem;