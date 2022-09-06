// import {
//     rootReducer,
//     getRandom, addTag, clearCards,
//     initStateCards
// } from './reducerCards';



// test('Cards reducer return the random card', () => {
//     const prevState = { ...initStateCards };
//     const cards = {
//         a: [1, 2, 3]
//     };
//     const newState = rootReducer(prevState, getRandom("a"));
    
//     expect(newState.tags).toBe(null);
//     expect(cards["a"]).toContain(newState.cards[0]);
// });