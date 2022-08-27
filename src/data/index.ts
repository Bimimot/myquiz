import { TCards } from "../types";
import { cssCards } from "./cards/cssCards";
import { htmlCards } from "./cards/htmlCards";
import { jsCards } from "./cards/jsCards";
import { reactCards } from "./cards/reactCards";
import { tsCards } from "./cards/tsCards";

export const cards: TCards = {
    html: htmlCards,
    css: cssCards,
    js: jsCards,
    ts: tsCards,
    react: reactCards
}