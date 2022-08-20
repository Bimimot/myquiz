import { TCard, TCards} from "../types";

export const collectTags = (cards: TCards): string[] => {
    const tags: string[] = [];
    for (let themeArr of Object.values(cards)) {
        tags.push(...themeArr.reduce((acc: string[], cur: TCard) => acc.concat(cur.tags), []))
    };
    
    return Array.from(new Set(tags)).sort()
};