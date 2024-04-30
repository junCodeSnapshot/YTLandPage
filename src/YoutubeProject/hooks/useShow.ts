import { useState } from "react";

export const useShow = () => {
    const [show, setShow] = useState(false);

    const handleShow = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const scrollLeft = (e.target as HTMLDivElement).scrollLeft;

        if (scrollLeft > 0) {
            setShow(true);
            return
        }
        setShow(false);
    }

    return{
        show,
        handleShow
    }

}
