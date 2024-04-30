import { VideoCard } from "./VideoCard"
import { useVideoState } from "../hooks/useVideoState";



export const Row = () => {

    const { videos } = useVideoState();
    return (
        <div className="row">
            {
                videos.map( video => (
                    <VideoCard key={video.channelName} props={video}/>
                ))
            }
        </div>
    )
}
