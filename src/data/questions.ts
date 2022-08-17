import { TCards } from "../types";
import { cssCards } from "./cssCards";
import { htmlCards } from "./htmlCards";
import { jsCards } from "./jsCards";
import { reactCards } from "./reactCards";
import { tsCards } from "./tsCards";

export const cards: TCards = {
    html: htmlCards,
    css: cssCards,
    js: jsCards,
    ts: tsCards,
    react: reactCards
}