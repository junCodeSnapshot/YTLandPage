import { useShow } from "../hooks/useShow"
import { ArrowsSliderProps } from "../interfaces/interfaces"

export const ArrowsSlider = ( {direction, show, classname} :ArrowsSliderProps) => {


    return (
        <div className={`${show ? 'arrowContainer' : 'noDisplay'} ${classname && classname}`}>
            <img
                alt="arrow"
                className="arrow"
                src="./assets/tagsbar/arrow.svg"
            />
            <div className="backgroundDeg" />
        </div>
    )
}
