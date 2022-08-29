import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collectedData } from "../data";
import { TBtn, TCardProps, TTag } from '../types';

const { cards } = collectedData;

type TStateCards = {
    cards: TCardProps[],
    tag: TTag | null
};

const initStateCards = {
    cards: [],
    tag: null
};

const cardsSlice = createSlice({
    name: "cards",
    initialState: initStateCards,
    reducers: {
        getRandom: (state: TStateCards, action: PayloadAction<{ btn: TBtn }>) => {
            const { btn } = action.payload;
            const arr = cards[btn.theme] || [];
            const index = Math.floor(Math.random() * (arr.length));

            state.cards = !!arr.length ? [arr[index]] : [];
            state.tag = null
        },
        addTag: (state: TStateCards, action: PayloadAction<{ tag: TTag }>) => {
            const tagedCards: TCardProps[] = [];

            for (let themeCards of Object.values(cards)) {
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
    getRandom, addTag, clearCards
}