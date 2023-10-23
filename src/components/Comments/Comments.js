import React from 'react';


const Comments = (props) => {
    return (
        <div className='video-details__comments'>
            <div className='video-details__avatar-comment'></div>
            <div className='video-details__content'>
                <h5>{props.name}</h5>
                <p>{props.timestamp}</p>
                <p>{props.comment}</p>
            </div>
        </div>
    );
};

export default Comments;