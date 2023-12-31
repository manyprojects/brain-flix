import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { KEY } from "../../utils/endpoints";
import { NavLink } from "react-router-dom";
import timeFunc from "../../utils/timeFunction";
import imgViews from "../../assets/images/Icons/views.svg";
import imgLikes from "../../assets/images/Icons/likes.svg";
import commentAvatar from "../../assets/images/Images/Mohan-muruge.jpg";
import "../../components/VideoDetails/VideoDetails.scss";
import "../../components/Comments/Comments.scss";
import "../../components/VideoList/VideoList.scss";
import "../../components/VideoItem/VideoItemsPage.scss";
import "../../components/Hero/HeroPage.scss";

const VideoDetailsPage = () => {
    const { videoId } = useParams();
    const [videoListData, setVideoListData] = useState(null);

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const fetchVideoList = async() => {
            try {
                const videoListResponse = await axios
                .get(`${SERVER_URL}/videos`);
                setVideoListData(videoListResponse);
            } catch(err) {
                return <p>{`VideoDetailsPage - VideoData: ${err.message}`} </p>;
            }
        }
        fetchVideoList();
        // eslint-disable-next-line 
    }, [videoId]);

    if( !videoListData ) {
        return (
            <p>Loading videos... </p>
        );
    }

    // distructuring data
    const {
        id,
        title, 
        channel, 
        image, 
        description, 
        views, 
        likes, 
        video,
        timestamp, 
        comments
    } = videoListData.data.find(v => videoId === v.id);

    return (
        <main>
            <div className='video-details'>
                <video className='video-details__video' controls poster={image}>
                    <source src={`${video}?api_key=${KEY}`} type="video/mp4"></source>
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
                    {videoListData.data.map(video => {
                        if(video.id !== id) {
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

export default VideoDetailsPage;