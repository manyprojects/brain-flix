import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import "./VideoList.scss";


const VideoList = (props) => {
    return (
        <>
            <ul className='list'>
                <h5 className='list__title'>NEXT VIDEOS</h5>
                {props.videos.map(video => 
                    video.id === props.selectedVideo.id? video.id:
                        <VideoItem 
                            key = {video.id}
                            id = {video.id}
                            title ={video.title}
                            channel = {video.channel}
                            image = {video.image}
                            selectedVideo = {props.selectedVideo}
                            selectVideo = {props.selectVideo}
                        />
                )}
            </ul>
        </>
    );
};

export default VideoList;