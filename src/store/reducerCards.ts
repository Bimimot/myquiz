import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cards } from "../data";
import { TCard } from '../types';

type TStateCards = {
    cards: TCard[],
    tags: string[]
};

const initStateCards = {
    cards: [],
    tags: []
};

const cardsSlice = createSlice({
    name: "cards",
    initialState: initStateCards,
    reducers: {
        getRandom: (state: TStateCards, action: PayloadAction<{ theme: string }>) => {
            const arr: TCard[] = cards[action.theme] || [];
            const index = Math.floor(Math.random() * (arr.length));
            return {
                cards: [arr[index]],
                tags: []
            }
        },

        clearCards: (state: TStateCards) => ({
            cards: [],
            tags: []
        }),
        addTag: (state: TStateCards, action: PayloadAction<{ tag: string }>) => {
            const tags = state.tags.concat(action.tag);
            const cards = getCardsByTags(tags);
            return { cards, tags }
        },
        delTag: (state: TStateCards, action: PayloadAction<{ tag: string }>) => {
            const tags = state.tags.filter(tag => tag !== action.tag);
            const cards = !!tags.length ? getCardsByTags(tags) : []
            return { cards, tags }
        }
    }
});

//-----------helper------------
const getCardsByTags = (tags: string[]) => {
    const taged: TCard[] = [];
    for (let theme in cards) {
        taged.concat(cards[theme].filter(card => card.tags.every(tag => tags.includes(tag))));
    };
    return taged
};
//-----------------------------

const { reducer, actions } = cardsSlice;

export { reducer as rootReducer, actions }