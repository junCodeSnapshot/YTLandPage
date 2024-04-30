import { videoDataProps } from "../interfaces/interfaces"
import { useVideoState } from "../hooks/useVideoState"

interface ComponentProps{
    props: videoDataProps

}

export const VideoCard = ({props} :ComponentProps) => {
    const { channelName, profilePic, stats, thumbnail, title } = props;
    return (
        <div className="videoCardContainer">
            <img  className="videoCardImage" src={thumbnail} alt={title} />
            <div className="videoCardVideoInfoContainer">
                <img  className="profilePicSize circleContainer" src={profilePic} alt={channelName} />
                <div>
                    <p>{ title }</p>
                    <p>{ stats }</p>
                </div>
            </div>
        </div>
    )
}
