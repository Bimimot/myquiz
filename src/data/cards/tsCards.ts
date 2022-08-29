import { TCard } from "../../types";

export const tsCards: TCard[] = [
    {
        question: "What is TypeScript?",
        answer: `TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces.  
            One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.
            For a large JavaScript project, adopting TypeScript might result in more robust software, while still being deployable where a regular JavaScript application would run.`,
        tags: ["ts"]
    },
    {
        question: "Explain generics in TypeScript",
        answer: `Generics are able to create a component or function to work over a variety of types rather than a single one.
${"```"}
class Queue<T> {  
  private data = [];  
  push = (item: T) => this.data.push(item);  
  pop = (): T => this.data.shift();  
}
  
const queue = new Queue<number>();  
queue.push(0);  
queue.push("1"); // ERROR : cannot push a string. Only numbers allowed  
${"```"}
`,
        tags: ["ts", "generic"]
    },
    {
        question: "Does TypeScript support all object oriented principles?",
        answer: `Yes. There are 4 main principles to Object Oriented Programming:  
- Encapsulation,  
- Inheritance,  
- Abstraction,  
- Polymorphism.
`,
        tags: ["ts", "OOP"]
    },
    {
        question: "How could you check null and undefined in TypeScript?",
        answer: `Just like in JS:  
        ***if (value) {...}***  
        It will evaluate to true if value is not:  
- null,  
- undefined
- NaN  
- empty string  
- 0  
- false
`,
        tags: ["ts", "types", "null", "undefined"]
    },
];