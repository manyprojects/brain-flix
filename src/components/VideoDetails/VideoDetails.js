import React from 'react';
import "./VideoDetails.scss";
import imgViews from "../../assets/images/Icons/views.svg";
import imgLikes from "../../assets/images/Icons/likes.svg";
import imgPlay from "../../assets/images/Icons/play.svg";
import commentAvatar from "../../assets/images/Images/Mohan-muruge.jpg";
import Comments from "../Comments/Comments";

const VideoDetails = (props) => {

    console.log("details:  ", props.videoDetailsData[0]);
    const {
        id, 
        title, 
        channel, 
        image, 
        description, 
        views, 
        likes, 
        duration, 
        video, 
        timestamp, 
        comments
    } = props.videoDetailsData[0];

    console.log("comment array", comments);

    return (
        <div className='video-details'>
            {/* poster attribute is used */}
            <video className='video-details__video' poster={image}>
            </video>
            <div>
                <button>
                    <img src={imgPlay}></img>
                </button>
                <div>
                    <progress id="file" value="32" max="100"> 32% </progress>
                </div>

            </div>
            <h1>{title}</h1>

            <hr />
            <div>
                <h5>By {channel}</h5>
                <h5>{timestamp}</h5>
                <img src={imgViews}></img>
                <h5>{views}</h5>
                <img src={imgLikes}></img>
                <h5>{likes}</h5>
            </div>
            <hr />
            <article>
                <p>{description}</p>
            </article>

            <div className='video-details__input'>
                <h3>{comments.length} Comments</h3>
                <h5>Join the Conversation</h5>
                <form>
                    <img className='video-details__avatar' src={commentAvatar} />
                    <div>
                        <label htmlFor="userText">COMMENT</label><br />
                        <textarea className="comments__text" name="userText" id="userText" rows="5" cols="50" placeholder="Add a new comment" required></textarea><br />
                        <button className="comments__button" type="submit">COMMENT</button>
                        <hr />
                    </div>
                </form>
            </div>

            {comments.map(comment => (
                // <div className='video-details__comments'>
                //     <div className='video-details__avatar-comment'></div>
                //     <div className='video-details__content'>
                //         <h5>{comment.name}</h5>
                //         <p>{comment.timestamp}</p>
                //         <p>{comment}</p>
                //     </div>
                // </div>
                <Comments 
                    key = {comment.id}
                    name = {comment.name}
                    timestamp = {comment.timestamp}
                    comment = {comment.comment}
                />
            ))}

        </div>
    );
};

export default VideoDetails;