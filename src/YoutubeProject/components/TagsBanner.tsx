import { useState } from "react";
import { ArrowsSlider } from "./ArrowsSlider";
import { useShow } from "../hooks/useShow";

interface MyComponentProps {
    tags: string[];
}

export const TagsBanner = ({ tags }: MyComponentProps) => {

    const [btnValue, setbtnValue] = useState('Todo');

    const{ handleShow, show } = useShow();

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const value = (e.target as HTMLInputElement).value;
        setbtnValue(value);
    };

    return (
        <div className="tagContent" onScrollCapture={e => handleShow(e)}>
            <ArrowsSlider direction={'left'} show={show}/>
            <div className="scrollContainer" id="scrollBar">
                {
                    tags.map((tag: string) => (
                        <button
                            className={`${tag === btnValue ? 'tag selectedTag' : 'tag'}`}
                            onClick={handleOnClick}
                            key={tag}
                            value={tag}
                        >{tag}</button>
                    ))}
            </div>
            <ArrowsSlider direction={'left'} show={!show} classname={'right'}/>
        </div>
    )
}
