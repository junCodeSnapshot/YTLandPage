import { useState } from 'react';
import { videoData } from '../data/videoData';

export const useVideoState = () => {
    const [videos, setVideos] = useState(videoData);
    const videoPerRow = 4;//it depends of the resolution but now it's static

    const handleVideosLeft = () => {
        if(videos.length > 0){
            setVideos(oldState => {
                oldState.shift();
                return [...oldState]
            })
        }
    }

    const handleRows = () => (videoData.length / videoPerRow)

    return {
        videoPerRow,
        colsNumbers: handleRows(),
        videos,
        handleVideosLeft
    }

}
