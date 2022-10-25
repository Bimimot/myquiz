import { useEffect, useState, RefObject } from "react";

function useMissClick(ref: RefObject<HTMLElement> | null) {
    const [missClick, setMissClick] = useState(false);

    useEffect(() => {
        const clickDocument = (event: MouseEvent) => {
            if (ref && ref.current && !ref.current.contains(event.target as HTMLElement)) {
                setMissClick(true);
            }
        };

        if (ref && ref.current) {
            document.addEventListener("click", clickDocument);
        };
    }, [ref]);

    return missClick;
};

export default useMissClick
