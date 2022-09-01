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
    },
    {
        question: "Do all HTML tags have an end tag?",
        answer: `No. There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag.`,
        tags: ["html", "end tag"]
    },
    {
        question: "What is formatting in HTML?",
        answer: `The HTML formatting is a process of formatting the text for a better look and feel.  
        It uses different tags to make text bold, italicized, underlined.`,
        tags: ["html", "formatting"]
    },
    {
        question: "What is the difference between HTML elements and tags?",
        answer: `HTML tag is just opening or closing entity. For example: <p> and  </p>.  
        HTML element includes opening tag, closing tag and content. For example: <p>Hi there! <p>`,
        tags: ["html", "tag", "element"]
    },
    {
        question: "What are Semantic Elements?",
        answer: `A semantic element clearly describes its meaning to both the browser and the developer.
###Examples of non-semantic elements:
- <div>,
- <span>.  
Thet tells nothing about its content.  

###Examples of semantic elements:
- <form>,
- <table>,
- <article>.  
Clearly defines its content.`,
        tags: ["html", "semantic"]
    },
    {
        question: "What is an image map?",
        answer: `Image map facilitates you to link many different web pages using a single image.  
        It is represented by <map> tag. You can define shapes in images that you want to make part of an image mapping.
        Example:  
${"```"}
<body>
  <div id="title"><img src="images/ecctitle.png" width="640" height="158"
   alt="Space shop"><br>
   <img src="images/navigate.png" width="640" height="30" alt="navigation" usemap="#Navigation"></div>
   <p>
    <map id="Navigation" name="Navigation">
        <area shape="poly" coords="113,24,211,24,233,0,137,0" href="inform.html" alt="Info">
        <area shape="poly" coords="210,24,233,0,329,0,307,24" href="activity.html" alt="Contacts">
        <area shape="poly" coords="304,24,385,24,407,0,329,0" href="depart.html" alt="About">
    </map>
   </p>
 </body>
${"```"}
        `,
        tags: ["html", "map", "image"]
    },
    {
        question: "How to create a nested webpage in HTML?",
        answer: `The HTML iframe tag is used to display a nested webpage.
        In other words, it represents a webpage within a webpage.`,
        tags: ["html", "iframe", "nested webpage"]
    },
    {
        question: "How many tags can be used to separate a section of texts?",
        answer: `Three tags are used to separate the texts.  
- <br> tag — Usually <br> tag is used to separate the line of text. It breaks the current line and conveys the flow to the next line,
- <p> tag — The <p> tag contains the text in the form of a new paragraph.  
- <blockquote> tag — It is used to define a large quoted section.`,
        tags: ["html", "p", "blockquote"]
    },
        {
        question: "What are empty elements?",
            answer: `HTML elements with no content are called empty elements. For example: <br>, <hr> etc.`,
        tags: ["html", "empty elements", "br"]
    },
    {
        question: "What is the use of a span tag? Give one example.",
        answer: `The span tag is used for make some accent with text:
- For adding color on text,  
- For adding background on text,  
- Highlight any color text`,
        tags: ["html"]
    },
    {
        question: "Why is a URL encoded in HTML?",
        answer: `An URL is encoded to convert non-ASCII characters into a format that can be used over the Internet because a URL is sent over the Internet by using the ASCII character-set only. If a URL contains characters outside the ASCII set, the URL has to be converted.  
        The non-ASCII characters are replaced with a “%” followed by hexadecimal digits.`,
        tags: ["html", "url", "encoding"]
    },
    {
        question: "Does a <!DOCTYPE html> tag is a HTML tag?",
        answer: `No, <!DOCTYPE html> is used to instruct the web browser about the HTML page.`,
        tags: ["html", "doctype"]
    },
        {
            question: "What is the canvas element in HTML5?",
            answer: `The <canvas> element is a container that is used to draw graphics on the web page using scripting language like JavaScript.
            It allows for dynamic and scriptable rendering of 2D shapes and bitmap images.`,
        tags: ["html", 'canvas']
    },
        {
            question: "Which type of video formats are supported by HTML5?",
            answer: `HTML 5 supports three types of video format:  
- mp4,  
- WebM,  
- Ogg`,
        tags: ["html", "video","mp4", "webm", "ogg"]
    },
        {
            question: "Is audio tag supported in HTML 5?",
            answer: `Yes. It is used to add sound or music files on the web page.  
            There are three supported file formats for HTML 5 audio tag.
- mp3,
- WAV,
- Ogg`,
        tags: ["html", "audio", "mp3", "wav", "ogg"]
    },
    {
        question: "What is the difference between progress and meter tag?",
        answer: `According to the latest HTML5 working draft, the progress tag is best used to display the progress of a specific task at hand. 
        Meter is best used for task-unrelated guages, such as disk space or memory usage.
        Progress is better for dynamic values, meter - for static`,
        tags: ["html", "progress", "meter"]
    },    
    {
        question: "What is the use of figure tag in HTML 5?",
        answer: `The figure tag is used to add a photo in the document on the web page. 
        It is used to handle the group of diagrams, photos, code listing with some embedded content.`,
        tags: ["html", "figure"]
    },
    {
        question: "What is the use of figcaption tag in HTML 5?",
        answer: `The <figcaption> element is used to provide a caption to an image.  
        It is an optional tag and can appear before or after the content within the <figure> tag.
        The <figcaption> element is used with <figure> element and it can be placed as the first or last child of the <figure> element.
        Example:
${"```"}  
<body>
  <article>
   <figure>
    <p><img src="images/dog.jpg" alt=""></p>
    <figcaption>It's a dog</figcaption>
   </figure>
   <figure>
    <p><img src="images/cat.jpg" alt=""></p>
    <figcaption>It's a cat</figcaption>
   </figure>
 </article>
 </body>
${"```"}
        `,
        tags: ["html", "figcaption", "figure"]
    },
    {
        question: "If I do not put <!DOCTYPE html> will HTML 5 work?",
        answer: `No, the browser will not be able to identify that it is an HTML document and HTML 5 tags do not function properly.`,
        tags: ["html", "doctype"]
    },
    {
        question: "What are the new features introduced in HTML5?",
        answer: `It supports following new features.
- New Semantic Elements , Forms 2.0, Persistent Local Storage,  
- WebSocket, Server-Sent Events(SSE),  
- Canvas, Audio & Video, Geolocation,  
- Microdata, Drag and drop`,
        tags: ["html", "html5", "websocket", "drag and drop"]
    },
    {
        question: "What is HTML5 Web Storage?",
        answer: `HTML5 Web Storage, also known as DOM Storage is a way to preserve state on either the client or server which makes it much easier to work against the stateless nature of HTTP.  
        It allows the web pages to store the data locally in the user's browser.
        It includes localStorage and sessionStorage`,
        tags: ["html", "web storage", "dom storage", "html5", "localStorage", "sessionStorage"]
    },
    {
        question: "What are the advantages of HTML5 Web Storage?",
        answer: `
- It can store 5 to 10 MB data. That is far more than what cookies allow.  
- HTML5 never transfers Web storage data with any HTTP request. Thus creating less overhead than cookies and in turn, increase the performance of the application.  
- Apps can work both online and offline.  
- This API is easy to learn and use.`,
        tags: ["html", "web storage"]
    },
    {
        question: "What is the concept of Application Cache in HTML5? What are its advantages?",
        answer: `HTML5 introduced the concept of Application Cache.  
        It means that a web application is cached, and is accessible without an internet connection`,
        tags: ["html", "application cache"]
    },
    {
        question: "What are the key advantages of Application Cache ?",
        answer: `
- Offline browsing — Users can use the application even when they are offline.  
- Speed — Cached resources load faster as compared to content that gets downloaded, directly from the server.  
- Reduced server load — The browser will only download updated/modified resources from the server.
        `,
        tags: ["html", "application cache"]
    },
    {
        question: "What is a Manifest file for appCache?",
        answer: `A Manifest file is a simple text file, that tells the browser what to cache and what not to cache.  
        *<html manifest="manifest.appcache">*  

A Manifest file contains three Sections as
- CACHE MANIFEST — HTML5 performs the caching of files listed under this section after they get downloaded for the first time.  
- NETWORK — Files listed here, always need a connection to the server. The browser can never cache them.  
- FALLBACK — Files listed here specify the fallback pages, if any page in it is not accessible.`,
        tags: ["html", "appcache", "manifest"]
    }

];

//appcache