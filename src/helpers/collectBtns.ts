import { TBtn, TCards } from "../types";
import { arrColors } from "./";

export const collectBtns = (cards: TCards): TBtn[] => {
    let mapBtns: TBtn[] = [];
    let i = 0;
    for (let [key, value] of Object.entries(cards)) {
        mapBtns.push({
            color: arrColors[i],
            theme: key,
            count: value.length
        });
        i++;
    };
    return mapBtns
};