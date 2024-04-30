export interface VideoContextProps{
    numberOfVideosPerRow: number,
    colsNumbers: number,
    videos: videoDataProps[],
    handleVideosLeft: () => void;

}
export interface asideIconsDataProps {
    name: string;
    iconURL: string;
}
export interface videoDataProps { 
    channelName: string;
    profilePic: string;
    stats: string;
    thumbnail: string;
    title: string;
}

export interface ArrowsSliderProps{
    show: boolean;
    direction: string; 
    classname?: string
}