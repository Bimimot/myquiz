import { TCard, TCards, TTag } from "../types";
import { arrColors } from "./";

export const collectTags = (cards: TCards): TTag[] => {
    const tags: TTag[] = [];
    let i = 0;
    for (let themeArr of Object.values(cards)) {
        const themeTags = new Set(themeArr.reduce((acc: string[], cur: TCard) =>
            acc.concat(cur.tags), []));
        const color = arrColors[i];
        const tagsWithColor: TTag[] = Array.from(themeTags).map(text => ({ text, color }))
        tags.push(...tagsWithColor);
        i++;
    };
    return tags
};