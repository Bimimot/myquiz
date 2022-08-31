import { useEffect, useState, RefObject } from "react";

function useMissClick(ref: RefObject<HTMLElement> | null) {
    const [missClick, setMissClick] = useState(false);

    useEffect(() => {
        console.log(ref);
        console.log(ref?.current);

        const clickDocument = (event: MouseEvent) => {
            console.log(ref);
            console.log(ref?.current);
            console.log(event);

            if (ref && ref.current && !ref.current.contains(event.target as HTMLElement)) {
                setMissClick(true);
            }
        };

        if (ref && ref.current) {
            document.addEventListener("click", clickDocument);
            console.log("add");
        }
    }, [ref]);

    return missClick;
};

export default useMissClick
