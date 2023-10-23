import React from 'react';
import './VideoItem.scss';

const VideoItem = (props) => {
    const handleClick = (e) => {
        let selectedId =  e.target.id;
        console.log(selectedId === e.target.id);
        props.selectVideo(selectedId);
    }

    return (
        <li>
            <img id={props.id} onClick = {handleClick} src={props.image} className='video-list'/>
            <h5>{props.title}</h5>
            <p>{props.channel}</p>
        </li>
    );
};

export default VideoItem;