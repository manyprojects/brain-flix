import React from 'react';
import "./VideoDetails.scss";
import imgViews from "../../assets/images/Icons/views.svg";
import imgLikes from "../../assets/images/Icons/likes.svg";
import commentAvatar from "../../assets/images/Images/Mohan-muruge.jpg";
import Comments from "../Comments/Comments";

const VideoDetails = (props) => {

    const {
        // id, 
        title, 
        channel, 
        image, 
        description, 
        views, 
        likes, 
        // duration, 
        // video, 
        timestamp, 
        comments
    } = props.videoDetailsData[0];

    function timeFunc(timestamp) {
        const commentDate = new Date(timestamp); 
        let month = commentDate.getMonth() + 1;
        let date = commentDate.getDate();
        if (month < 10) {
            month  = '0' + month;
        }
        if (date < 10) {
            date = '0' + date;
        }
        return  `${month}/${date}/${commentDate.getFullYear()}`;
    }

    return (
        <div className='video-details'>
            {/* poster attribute is used */}
            <video className='video-details__video' controls poster={image}>
            </video>

            <h1 className='video-details__title'>{title}</h1>

            <hr className='video-details__divider-tablet'/>

            <div className='video-details__info'>
                <div className='video-details__left'>
                    <h5 className='video-details__channel'>By {channel}</h5>
                    <h5 className='video-details__time'>{timeFunc(timestamp)}</h5>
                </div>
                <div className='video-details__right'>
                    <div className='video-details__views'>
                        <img src={imgViews} alt='clicked img'></img>
                        <p className='video-details__views-text'>{views}</p>
                    </div>
                    <div className='video-details__likes'>
                        <img src={imgLikes} alt='like icon'></img>
                        <p className='video-details__likes-text'>{likes}</p>
                    </div>
                </div>
            </div>
            
            <hr className='video-details__divider'/>

            <article>
                <p className='video-details__description'>{description}</p>
            </article>

            <div className='video-details__input'>
                <h3 className='video-details__heading'>{comments.length} Comments</h3>
                <form className='video-details__form'>
                    <img className='video-details__avatar' src={commentAvatar} alt='colored avatar' />
                    <div className='video-details__text-block' >
                        <div className='video-details__input-block'>
                            <label className='video-details__label' htmlFor="userText">JOIN THE CONVERSATION</label><br />
                            <textarea className="video-details__text" name="userText" id="userText" rows="5" cols="50" placeholder="Add a new comment" required></textarea><br />
                        </div>
                        <button className="video-details__button" type="submit">COMMENT</button>
                    </div>
                </form>
            </div>
            <hr className='video-details__divider' />

            {comments.map(comment => (
                <Comments 
                    key = {comment.id}
                    name = {comment.name}
                    timestamp = {comment.timestamp}
                    comment = {comment.comment}
                    timeFunc = {timeFunc}
                />
            ))}

        </div>
    );
};

export default VideoDetails;