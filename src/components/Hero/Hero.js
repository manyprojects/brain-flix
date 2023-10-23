import { useState } from 'react';
import React from 'react';
import videoData from '../../data/videos.json';
import videoDetailsData from '../../data/video-details.json';
import VideoList from '../VideoList/VideoList';
import VideoDetails from '../VideoDetails/VideoDetails';

const Hero = () => {
    console.log(videoData);

    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
    // console.log("selected video", selectedVideo);

    const selectVideo = (selectedVideoId) => {
        console.log("video selected: ",  selectedVideoId);
        const newSelectedVideo = videoData.find(
            video => video.id === selectedVideoId);
        console.log(newSelectedVideo);
        setSelectedVideo(newSelectedVideo);
    }

    return (
        <main>
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