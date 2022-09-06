import { cssCards } from "./cards/cssCards";
import { htmlCards } from "./cards/htmlCards";
import { jsCards } from "./cards/jsCards";
import { reactCards } from "./cards/reactCards";
import { tsCards } from "./cards/tsCards";

import colors from "../../src/scss/btnColors.scss";
import { TBtn, TTag, TCard, TCardProps, TCards } from "../types";

const arrColors: string[] = (colors.btnColors || "white").replace(/\s/g, '').split(',');

const rawCards: TCards = {
    html: htmlCards,
    css: cssCards,
    js: jsCards,
    ts: tsCards,
    react: reactCards
};

export const collectedData = function collectData(): {
    btns: TBtn[],
    tags: TTag[],
    cards: { [key in string]: TCardProps[] }
} {
    let btns: TBtn[] = [];
    let tags: TTag[] = [];
    let cards: { [key in string]: TCardProps[] } = {};

    let i = 0;
    for (let [theme, themeCards] of Object.entries(rawCards)) {
        const color = arrColors[i];

        //collect buttons
        btns.push({
            color,
            theme,
            count: themeCards.length
        });

        //collect tags
        const themeTags = new Set(themeCards.reduce((acc: string[], cur: TCard) =>
            acc.concat(cur.tags), []));
        const tagsWithColor: TTag[] = Array.from(themeTags).map(text => ({ text, color }));
        tags.push(...tagsWithColor);

        //add color in cards
        cards[theme] = themeCards.map((item): TCardProps => ({ ...item, color }));

        i++;
    };

    return { btns, tags, cards }
}();