import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collectedData } from "../data";
import { TCardProps, TTag } from '../types';

type TStateCards = {
    raw: {
        [x: string]: TCardProps[]
    },
    cards: TCardProps[],
    tag: TTag | null
};

const initStateCards = {
    raw: collectedData.cards,
    cards: [],
    tag: null
};

const cardsSlice = createSlice({
    name: "cards",
    initialState: initStateCards,
    reducers: {
        getRandom: (state: TStateCards, action: PayloadAction<string>) => {
            const theme = action.payload;
            const arr = state.raw[theme] || [];
            const index = Math.floor(Math.random() * (arr.length));

            state.cards = !!arr.length ? [arr[index]] : [];
            state.tag = null
        },
        addTag: (state: TStateCards, action: PayloadAction<{ tag: TTag }>) => {
            const tagedCards: TCardProps[] = [];

            for (let themeCards of Object.values(state.raw)) {
                tagedCards.push(...themeCards.filter(({ tags }) => tags.includes(action.payload.tag.text)));
            };

            state.tag = action.payload.tag;
            state.cards = tagedCards;
        },
        clearCards: (state: TStateCards) => {
            state.cards = [];
            state.tag = null
        }
    }
});


const { reducer, actions } = cardsSlice;
const { getRandom, addTag, clearCards } = actions;

export {
    reducer as rootReducer, actions,
    getRandom, addTag, clearCards,
    initStateCards
}