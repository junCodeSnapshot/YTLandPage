
import { useVideoState } from "../hooks/useVideoState";
import { Row } from "./Row";



export const VideosContainer = () => {

    const {colsNumbers} = useVideoState()

    return (
        <div className="rowsContainer">
            {
                Array.from({length: colsNumbers}).map((_, index) => (
                    <Row key={index} />
                ))
            }
        </div>
    )
}
