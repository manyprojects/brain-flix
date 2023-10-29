import { useState, useEffect } from 'react';
// import videoData from "../../data/videos.json"
// import videoDetailsData from '../../data/video-details.json';
// import VideoList from '../../components/VideoList/VideoList';
// import VideoDetails from '../../components/VideoDetails/VideoDetails';
import "../../components/Hero/Hero.scss";
import axios from "axios"; 
import { API_URL, KEY} from "../../utils/endpoints";

const HomePage = () => {
    
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`${API_URL}?api_key=${KEY}`);
                setVideoData(response);
                console.log(response);

            } catch(err) {
                console.log("VideoData: ", err);
            }
        }
        fetchVideo();
    }, []);

    console.log("videoData 2: ", videoData);

    return (
        <main>
            Home Page!
        </main>
    );
};

export default HomePage;