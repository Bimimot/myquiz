import { TCard } from "../../types";

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
            Meta tags are not displayed on the page but intended for the browser.  
            Meta tags can contain information about character encoding, description, title of the document etc.  
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
        tags: ["html", "input", "html5"]
    },
    {
        question: "What is HTML5 Web Storage? Explain localStorage and sessionStorage.",
        answer: `With HTML5, web pages can store data locally within the user's browser.  
        The data is stored in name/value pairs, and a web page can only access data stored by itself.  
        — Data stored through localStorage is permanent: it does not expire and remains stored on the user's computer until a web app deletes it or the user asks the browser to delete it.  
        — SessionStorage has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through sessionStorage is deleted.
`,
        tags: ["html", "storage", "localStorage", "sessionStorage"]
    },
    {
        question: "What's new in HTML 5?",
        answer: ` HTML 5 adds a lot of new features to the HTML specification.  
### New Doctype
- <!DOCTYPE html>
### New Structure
- <section> to define sections of pages
- <header> - defines the header of a page
- <footer> - defines the footer of a page
- <nav> - defines the navigation on a page
- <article> - defines the article or primary content on a page
- <aside> - defines extra content like a sidebar on a page
- <figure> - defines images that annotate an article
### New Inline Elements
- <mark> - to indicate content that is marked in some fashion
- <time> - to indicate content that is a time or date
- <meter> - to indicate content that is a fraction of a known range - such as disk usage
- <progress> - to indicate the progress of a task towards completion
### New Input Types
- <input type="datetime">
- <input type="datetime-local">
- <input type="date">
- <input type="month">
- <input type="week">
- <input type="time">
- <input type="number">
- <input type="range">
- <input type="email">
- <input type="url">
### New Elements
- *canvas* - an element to give you a drawing space in JavaScript on your Web pages. It can let you add images or graphs to tool tips or just create dynamic graphs on your Web pages, built on the fly.
- *video* - add video to your Web pages with this simple tag.
- *audio* - add sound to your Web pages with this simple tag.
### No More Types for Scripts and Links
${"```"}
<link rel="stylesheet" href="path/to/stylesheet.css" />
<script src="path/to/script.js"></script>
${"```"}
### Make your content editable
${"```"}
<h2> To-Do List </h2>
<ul contenteditable="true">
  <li> Break mechanical cab driver. </li>
  <li> Drive to abandoned factory
  <li> Watch video of self </li>
</ul>
${"```"}
### Input Attributes
- require to mention the form field is required
- autofocus puts the cursor on the input field
`,
        tags: ["html", "html5", "editable", "input"]
    }

];