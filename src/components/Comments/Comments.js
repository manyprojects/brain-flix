import React from 'react';
import "./Comments.scss";


const Comments = (props) => {
    return (
        <>
            <div className='video-comments'>
                <div className='video-comments__holder'></div>
                <div className='video-comments__content'>
                    <div className='video-comments__flex'>
                        <h4 className='video-comments__name'>{props.name}</h4>
                        <p className='video-comments__time'>{props.timeFunc(props.timestamp)}</p>
                    </div>
                    <p>{props.comment}</p>
                </div>
            </div>
            <hr className='divider'/>
        </>
    );
};

export default Comments;