import { TBtn, TCards, TThemes } from "../types";
import colors from "../../src/scss/btnColors.scss";

export const collectBtns = (cards: TCards): TBtn[] => {
    let mapBtns: TBtn[] = [];
    const colorsArr = colors.btnColors.replace(/\s/g,'').split(',');
    let i = 0;
    for (let [key, value] of Object.entries(cards)) {
        mapBtns.push({
            color: colorsArr[i],
            theme: key as TThemes,
            count: value.length
        });
        i++;
    };
    return mapBtns
};