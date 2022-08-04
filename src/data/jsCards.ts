import { TCard } from "../types";

export const jsCards: TCard[] = [
    {
        question: "What the difference between prvenetDefault() and stopPropagation()",
        answer: `The method event.prvenetDefault() stops the default behaviour. For example - the sending form after submit.  
            The method event.stopPropagation() prevents further propagation of the current event in the capturing and bubbling phases.`,
        tags: ["prvenetDefault", "stopPropagation", "event", "web api"]
    },
    {
        question: "What is the Promise?",
        answer: `A ***promise*** is a special JavaScript object.  
            The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.  
            Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.  
            The promise object returned by the new Promise constructor has these internal properties:  
            state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.  
            result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
            
            
            let promise = new Promise(function(resolve, reject) {
            //executor (the producing code, "singer")
            });`
        ,
        tags: ["js", "promise"]
    },
    {
        question: "What is the typeof null?",
        answer: `typeof null === “object”;  
        Now it's a specification and it's a rudiment from first implementation JS.`,
        tags: ["js", "types", "null"]
    },
    {
        question: "What is the type of any function?",
        answer: `Function is an object, but:  
Typeof alert(a) === “function”`,
        tags: ["js", "types", "function"]
    },
    {
        question: "How many types in JS?",
        answer: `8 types - 7 are primitives:  
        — number,  
        — string,  
        — boolean,  
        — symbol,  
        — bigint,  
        — null,  
        — undefined.
        Plus the 'object'`,
        tags: ["js", "types"]
    },
    {
        question: "How many primitives in JS?",
        answer: `There are 7 primitives in:  
        — number,  
        — string,  
        — boolean,  
        — symbol,  
        — bigint,  
        — null,  
        — undefined.`,
        tags: ["js", "types", "primitives"]
    },
    {
        question: "How could you check null and undefined in TypeScript?",
        answer: `Just:  
        ***if (value) {...}***  
        It will evaluate to true if value is not:  
-null,  
-undefined  
-NaN  
-empty string  
-0  
-false
`,
        tags: ["ts", "types", "null", "undefined"]
    },
    {
        question: "JS specification doesn't have setTimeout() method. Why this method works?",
        answer: `This method belongs to WEB api (browser api)`,
        tags: ["js", "web api"]
    },
    {
        question: "How to check null?",
        answer: `The typeof ***null*** is **object**, so  
        we should use
        ${"```"}
        if (value === null) { ... }
        ${"```"}
        `,
        tags: ["js", "types", "null"]
    },
    {
        question: "What is hoisting?",
        answer: `Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.  
        Regardless of whether their scope is global or local.
        Hoisting mechanism only moves the declaration, but the assignments are left in place`,
        tags: ["js", "hoisting"]
    }

];