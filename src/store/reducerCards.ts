import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collectedData } from "../data";
import { TBtn, TCardProps, TCard } from '../types';

const {cards} =  collectedData ;

type TStateCards = {
    cards: TCardProps[],
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
        getRandom: (state: TStateCards, action: PayloadAction<{ btn: TBtn }>) => {
            const { btn } = action.payload;
            const arr = cards[btn.theme] || [];
            const index = Math.floor(Math.random() * (arr.length));
            
            state.cards = !!arr.length ? [arr[index]] : [];
            state.tags= []            
        },
        addTag: (state: TStateCards, action: PayloadAction<{ tag: string }>) => {
            const tags = state.tags.concat(action.payload.tag);
            const cards = getCardsByTags(tags);

            state.tags = tags;
            state.cards = [];
        },
        delTag: (state: TStateCards, action: PayloadAction<{ tag: string }>) => {
            const tags = state.tags.filter(tag => tag !== action.payload.tag);
            const cards = !!tags.length ? getCardsByTags(tags) : []
            
            state.tags = tags;
            state.cards = [];
        },
        clearCards: (state: TStateCards) => {
            state.cards = [];
            state.tags = []
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
const { getRandom, addTag, delTag, clearCards } = actions;

export {
    reducer as rootReducer, actions,
    getRandom, addTag, delTag, clearCards
}