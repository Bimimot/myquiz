import { TBtn, TCards, TThemes } from "../types";
import { arrColors } from "./";

export const collectBtns = (cards: TCards): TBtn[] => {
    let mapBtns: TBtn[] = [];
    let i = 0;
    for (let [key, value] of Object.entries(cards)) {
        mapBtns.push({
            color: arrColors[i],
            theme: key as TThemes,
            count: value.length
        });
        i++;
    };
    return mapBtns
};