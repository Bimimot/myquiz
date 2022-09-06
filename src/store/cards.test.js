import {
  rootReducer,
  getRandom,
  addTag,
  clearCards,
  initStateCards,
} from "./reducerCards";

const testRaw = {
  a: [
    { val: "All about the Sun", tags: ["sun"] },
    { val: "All about the Moon", tags: ["moon"] },
  ],
  b: [
    { val: "Bad habbits of the Sun", tags: ["sun"] },
    { val: "Bad habbits of the Juniper", tags: ["juniper"] },
  ],
};

test("Cards reducer return the random card", () => {
  const prevState = {
    ...initStateCards,
    raw: {
      a: [1, 2, 3],
    },
  };
  const newState = rootReducer(prevState, getRandom("a"));

  expect(newState.tag).toBe(null);
  expect(prevState.raw["a"]).toContain(newState.cards[0]);
});

test("Cards reducer return cards by tag", () => {
  const prevState = {
    ...initStateCards,
    raw: testRaw,
  };
  const newState = rootReducer(
    prevState,
    addTag({ text: "sun", color: "yellow" })
  );

  expect(newState.tag).toEqual({ text: "sun", color: "yellow" });
  expect(newState.cards).toEqual([
    { val: "All about the Sun", tags: ["sun"] },
    { val: "Bad habbits of the Sun", tags: ["sun"] },
  ]);
});

test("Cards reducer clear tags and cards", () => {
  const prevState = {
    cards: [{ val: "Pluto is alone", tags: ["pluto"] }],
    tag: ["pluto"],
    raw: testRaw,
  };

  expect(rootReducer(prevState, clearCards())).toEqual({
    cards: [],
    tag: null,
    raw: testRaw,
  });
});
