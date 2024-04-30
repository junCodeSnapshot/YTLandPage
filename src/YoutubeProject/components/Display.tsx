import { VideosContainer } from "./VideosContainer"
import { TagsBanner } from "./TagsBanner"
import { tags } from '../data/tagsData';


export const Display = () => {
    return (
        <div className="displayContainer">
            <TagsBanner tags={tags} />
            <VideosContainer />
        </div>
    )
}
