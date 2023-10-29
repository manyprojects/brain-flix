import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios"; 
import { API_URL, KEY } from "../../utils/endpoints";
import { NavLink } from 'react-router-dom';
import imgViews from "../../assets/images/Icons/views.svg";
import imgLikes from "../../assets/images/Icons/likes.svg";
import commentAvatar from "../../assets/images/Images/Mohan-muruge.jpg";
import "../../components/VideoDetails/VideoDetails.scss";
import "../../components/Comments/Comments.scss";
import "../../components/VideoList/VideoList.scss";
import "../../components/VideoItem/VideoItemsPage.scss";
import "../../components/Hero/HeroPage.scss";

const HomePage = () => {
    
    const [videoData, setVideoData] = useState(null);
    const [videoDetailsData, setVideoDetailsData] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const videoResponse = await axios
                .get(`${API_URL}/videos?api_key=${KEY}`);
                setVideoData(videoResponse);

                // console.log(videoResponse.data[0].id);

                const fetchVideoDetails = async () => {
                    try {
                        const videoDetailsResponse = await axios
                        .get(`${API_URL}/videos/${videoResponse.data[0].id}?api_key=${KEY}`);
                        setVideoDetailsData(videoDetailsResponse.data);
                        // console.log("videoDetailsResponse", videoDetailsResponse);
                    } catch(err) {
                        console.log("VideoDataDetails: ", err);
                    }
                }
                fetchVideoDetails();
            } catch(err) {
                console.log("VideoData: ", err);
            }
        }
        fetchVideo();

    }, []);

    console.log("videoData: ", videoData);
    // console.log("videoDetailsData", typeof(videoDetailsData.data));
    console.log("videoDetailsData", videoDetailsData);


    if(!videoData || !videoDetailsData) {
        return (
            <p>Loading videos... </p>
        );
    }

    // destructuring data
    const videoArray = videoData.data;
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
    } = videoDetailsData;

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

    // const selectVideo = (selectedVideoId) => {
    //     const newSelectedVideo = videoArray.find(
    //         video => video.id === selectedVideoId);
    //     setVideoDetailsData(newSelectedVideo);
    // }

    // const handleClick = (e) => {
    //     let selectedId =  e.target.id;
    //     selectVideo(selectedId);
    // }

    return (
        <main>
            <div className='video-details'>
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
                    <div key={comment.id}>
                        <div className='video-comments'>
                            <div className='video-comments__holder'></div>
                            <div className='video-comments__content'>
                                <div className='video-comments__flex'>
                                    <h4 className='video-comments__name'>{comment.name}</h4>
                                    <p className='video-comments__time'>{timeFunc(comment.timestamp)}</p>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                        <hr className='divider'/>
                    </div>
                ))}
            </div>

            <>
                <ul className='list'>
                    <h5 className='list__title'>NEXT VIDEOS</h5>
                    {videoArray.map(video => {
                        if(video.id !== videoData.data[0].id) {
                            return (<li key={video.id}>
                                        <NavLink to={`/video/${video.id}`} className='video-list'>
                                            <img src={video.image} className='video-list__image' alt='videos' />
                                            <div className='video-list__text'>
                                                <p className='video-list__title'>{video.title}</p>
                                                <p className='video-list__channel'>{video.channel}</p>
                                            </div>
                                        </NavLink>
                                </li>);
                        }
                        return null;
                    }
                    )}
                </ul>
            </>

        </main>
    );
};

export default HomePage;