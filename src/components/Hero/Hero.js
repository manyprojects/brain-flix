import { useState } from 'react';
import React from 'react';
import videoData from '../../data/videos.json';
import videoDetailsData from '../../data/video-details.json';
import VideoList from '../VideoList/VideoList';
import VideoDetails from '../VideoDetails/VideoDetails';
import "./Hero.scss";

const Hero = () => {

    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

    const selectVideo = (selectedVideoId) => {
        const newSelectedVideo = videoData.find(
            video => video.id === selectedVideoId);
        setSelectedVideo(newSelectedVideo);
    }

    return (
        <main className='main'>
            <VideoDetails
                currentVideo = {selectedVideo}
                videoDetailsData = {videoDetailsData.filter(v => v.id === selectedVideo.id)}
            />

            <VideoList 
                videos = {videoData}
                selectedVideo = {selectedVideo}
                selectVideo = {selectVideo}
            />

        </main>
    );
};

export default Hero;