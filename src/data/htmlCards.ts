import { TCard } from "../types";

export const htmlCards: TCard[] = [
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
];