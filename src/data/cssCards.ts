import { TCard } from "../types";

export const cssCards: TCard[] = [
        {
            question: "What the difference between fixed, absolute and relative position?",
            answer: `With relative position element is shifted from its default position.  
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
        {
            question: "How is responsive design different from adaptive design?",
            answer: `Both designs attempt to optimize the user experience across different devices, adjusting for different viewport sizes, resolutions, usage contexts, control mechanisms, and so on.  
            **Responsive** design works on the principle of flexibility — a single fluid website that can look good on any device.  
            **Adaptive** design is more like the modern definition of progressive enhancement. Instead of one flexible design, adaptive design detects the device and other features, and then provides the appropriate feature and layout.
            It uses media queries and rem units, and can change the order of elements or them behaivor`,
            tags: ["css", "design"]
        },
        {
            question: "What is CSS?",
            answer: `CSS stands for Cascading Style Sheet.  
            It's a style sheet language that determines how the elements/contents in the page are looked/shown.  
            CSS is used to develop a consistent look and feel for all the pages.  
            CSS3 or Cascading Style Sheets Level 3 is the third version of the CSS standard that is used to style and format web pages.  
            The main change in CSS3 is the inclusion of divisions of standards into different modules that makes CSS3 easier to learn and understand.`,
            tags: ["css", "css3"]
        },
        {
            question: 'What is the Box model in CSS? Which CSS properties are a part of it?',
            answer: `A rectangle box is wrapped around every HTML element.  
            The box model is used to determine the height and width of the rectangular box.
            The CSS Box consists of Width and height, padding, borders, margin.
    - **Content:**  Actual Content of the box where the text or image is placed.
    - **Padding**: Area surrounding the content (Space between the border and content).
    - **Border**: Area surrounding the padding.
    - **Margin**: Area surrounding the border`,
            tags: ["css", "box model"]
        },
        {
            question: 'What are the advantages of using CSS?',
            answer: `The main advantages of CSS are given below:
    - **Separation of content from presentation** - CSS provides a way to present the same content in multiple presentation formats in mobile or desktop or laptop.
    - **Easy to maintain** - CSS, built effectively can be used to change the look and feel complete by making small changes. To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.
    - **Bandwidth** - Used effectively, the style sheets will be stored in the browser cache and they can be used on multiple pages, without having to download again.`,
            tags: ["css", "css advantages"]
        },
        {
            question: 'What are the limitations of CSS?',
            answer: `Disadvantages of CSS are given below:
    - **Browser Compatibility**: Some style selectors are supported and some are not. We can to determine which style is supported or not using the @support selector or use site caniuse.com.
    - **Cross Browser issue**: Some selectors behave differently in a different browser.
    - **There is no parent selector**: Currently, Using CSS, you can't select a parent tag`,
            tags: ["css", "css disadvantages"]
        },
    {
        question: 'How to include CSS in the webpage?',
        answer: `There are different ways to include a CSS in a webpage:  
1. External Style Sheet: An external file linked to your HTML document. Using link tag, we can link the style sheet to the HTML page.
${"````"}
<link rel="stylesheet" type="text/css" href="mystyles.css" />
${"````"}
2. Embed CSS with a style tag: A set of CSS styles included within your HTML page.  
${"````"}
<style type="text/css">  
/*Add style rules here*/  
</style>
${"````"}
Add your CSS rules between the opening and closing style tags and write your CSS exactly the same way as you do in stand-alone stylesheet files.  
  
3. Add inline styles to HTML elements(CSS rules applied directly within an HTML tag.): Style can be added directly to the HTML element using a style tag.  
${"````"}
<h2 style="color:red;background:black">Inline Style</h2>
${"````"}
4. Import a stylesheet file (An external file imported into another CSS file): Another way to add CSS is by using the @import rule. This is to add a new CSS file within CSS itself.
${"````"}
@import "path/to/style.css";
${"````"}`,
        tags: ["css", "css disadvantages"]
    },
    {
        question: 'What are the different types of Selectors in CSS?',
        answer: `A CSS selector is the part of a CSS ruleset that actually selects the content you want to style. Different types of selectors are listed below.

- Universal Selector: The universal selector works like a wildcard character, selecting all elements on a page.  
*{...}  
  
- Element Type Selector: This selector matches one or more HTML elements of the same name.  
ul {...}
  
- ID Selector: This selector matches any HTML element that has an ID attribute with the same value as that of the selector.  
#container {...}
<div id="container"></div>

- Class Selector: The class selector also matches all elements on the page that have their class attribute set to the same value as the class.  
.box {...}
<div class="box"></div>

- Descendant Combinator: The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method.  
#container .box {...}
<div id="container">  
<div class="box"></div>  
</div>  
`,
        tags: ["css", "selectors"]
    },
    {
        question: "What is VH/VW (viewport height/ viewport width) in CSS?",
        answer: `It's a CSS unit used to measure the height and width in percentage with respect to the viewport.  
It is used mainly in responsive design techniques. The measure VH is equal to 1/100 of the height of the viewport.  
If the height of the browser is 1000px, 1vh is equal to 10px. Similarly, if the width is 1000px, then 1 vw is equal to 10px.`,
        tags: ["css", "vh", "vw"]
    },
    {
        question: "What is VH/VW (viewport height/ viewport width) in CSS?",
        answer: `It's a CSS unit used to measure the height and width in percentage with respect to the viewport.  
It is used mainly in responsive design techniques. The measure VH is equal to 1/100 of the height of the viewport.  
If the height of the browser is 1000px, 1vh is equal to 10px. Similarly, if the width is 1000px, then 1 vw is equal to 10px.  `,
        tags: ["css", "vh", "vw"]
    },
    {
        question: "What is the difference between inline, inline-block, and block?",
        answer: `**Block Element**: The block elements always start on a new line.  
They will also take space for an entire row or width. List of block elements are <div>, <p>.
**Inline Elements**: Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are <a>, <span> , <strong>, and <img> tags.
**Inline Block Elements**: Inline-block elements are similar to inline elements, except they can have padding and margins and set height and width values`,
        tags: ["css", "vh", "vw"]
    },
    {
        question: "Difference between reset vs normalize CSS?. How do they differ?",
        answer: `**Reset CSS**: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same.          
**Normalize CSS**: Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies`,
        tags: ["css", "normalize css", "reset css"]
    }
];