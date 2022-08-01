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
            question: `What is the difference between <span> and <div>`,
            answer: `<Div> needs for some block of document, <span> is a container for small elements.  
            We can't use SPAN inside DIV. (DIV is an inline element, SPAN - is a block element)`,
            tags: ["html", "div", "span"]
        },
        {
            question: "What are meta tags?",
            answer:
                `Meta tags are within <head> tag, they describe the page.  
  
                
<meta name="description" content="Description search engines use">  
<meta name="keywords" content="Keywords, of, your, page">  
<meta name="author" content = "Me">
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
        },
        {
            question: "",
            answer: ``
        }
    ]
}