import React from 'react';
import VideoItem from '../VideoItem/VideoItem';


const VideoList = (props) => {
    return (
        <>
            <ul>
                {props.videos.map(video => 
                    video.id === props.selectedVideo.id? console.log(video.id):
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