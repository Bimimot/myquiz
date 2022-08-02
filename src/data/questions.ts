import { TCards } from "../types";
//add two spaces to the end of any line to create a new line

export const cards: TCards = {
    html: [
        {
            question: "What is a DOM?",
            answer:
                `DOM - Document Object Model. Browser makes DOM when it's parsing the html-document.  
                It's an interface for HTML documents.DOM uses for interactions by JS-scripts.  
                DOM shows in the DevTools in a browser.
                In JS the DOM introduced like ***document*** `,
            tags: ["html", "dom"]
        },
        {
            question: `What is the difference between SPAN and DIV`,
            answer: `DIV needs for some block of document, SPAN is a container for small elements.  
            We can't use SPAN inside DIV. (DIV is an inline element, SPAN - is a block element)`,
            tags: ["html", "div", "span"]
        },
        {
            question: "What are meta tags?",
            answer:
                `Meta tags are within <head> tag, they describe the page.    
${"```"}
<meta name="description" content="Description search engines use">
<meta name="keywords" content="Keywords, of, your, page">
<meta name="author" content = "Me">
${"```"}
`,
            tags: ["html", "tags", "meta"],
        },

        {
            question: "What are the newly introduced input types in HTML5?",
            answer: `— color,  
— date,  
— datetime,  
— local,  
— email,  
— month,  
— number range.  `,
            tags: ["html", "input"]
        }
    ],
    css: [
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
    ],
    js: [
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
        // {
        //     question: "",
        //     answer: ``
        // },
        // {
        //     question: "",
        //     answer: ``
        // },
        // {
        //     question: "",
        //     answer: ``
        // },
        // {
        //     question: "",
        //     answer: ``
        // }
    ],
    ts: [
        {
            question: "What is TypeScript and why would I use it in place of JavaScript?",
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
    ],
    react: [

        {
            question: "",
            answer: ``
        },
        {
            question: "",
            answer: ``
        },
        {
            question: "",
            answer: ``
        },
        {
            question: "",
            answer: ``
        },
        {
            question: "",
            answer: ``
        }
    ]
}