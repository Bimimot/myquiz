import { TCard } from "../types";

export const cssCards: TCard[] = [
    {
        question: "What the difference between fixed, absolute and relative position?",
        answer: `With relattive position element is shifted from its default position.  
With fixed - it's shifted from browser window.  
With absolute - it's shifted from parent element witch has position.  
And static position - it's default position. Elements show in the same order as in a document.`,
        tags: ["css", "position"]
    },
    {
        question: "How to use media queries?",
        answer: `Media queries are used for the following:  
— To conditionally apply styles with the CSS @media and @import,
— To target specific media for the <style>, <link>, <source>, and other HTML elements with the media= attribute,  
— To test and monitor media states using the Window.matchMedia() and MediaQueryList.addListener() JavaScript methods.  
...  
@media (max-width: 1200px) { /* … */ }
  `,
        tags: ["css", "media queries"]
    },
    // {
    //     question: "",
    //     answer: ``
    // },
    // {
    //     question: "",
    //     answer: ``
    // }
];