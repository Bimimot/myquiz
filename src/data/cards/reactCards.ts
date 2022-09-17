import { TCard } from "../../types";

export const reactCards: TCard[] = [
    {
        question: "What is React?",
        answer: `A declarative, efficient, and flexible JavaScript library for building user interfaces. 
        It lets you compose complex UIs from small and isolated pieces of code called “components”.`,
        tags: ["react"]
    },
    {
        question: "What is the difference between a functional and class-based component in React?",
        answer: `Functional components are functions that take props as an argument and return a JSX element,  whereas class-based components are ES6 classes that extend React.Component class. 
        Functional components are typically simpler to write than class-based components because they don't have to deal with the this keyword or lifecycle methods`,
        tags: ["react", "class-based", "functional", "lifecycle"]
    },
    {
        question: "What is the difference between a stateless and stateful component in React?",
        answer: `tateless components are components that do not maintain any internal state, whereas stateful components maintain some internal state. Stateless components are typically simpler to write and reason about than stateful components.`,
        tags: ["react", "state", "stateless", "stateful"]
    }

];