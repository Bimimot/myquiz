import { TCard } from "../../types";

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
If the height of the browser is 1000px, 1vh is equal to 10px. Similarly, if the width is 1000px, then 1 vw is equal to 10px.  `,
        tags: ["css", "vh", "vw"]
    },
    {
        question: "What is the difference between inline, inline-block, and block?",
        answer: `**Block Element**: The block elements always start on a new line.  
They will also take space for an entire row or width. List of block elements are <div>, <p>.
**Inline Elements**: Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are <a>, <span> , <strong>, and <img> tags.
**Inline Block Elements**: Inline-block elements are similar to inline elements, except they can have padding and margins and set height and width values`,
        tags: ["css", "display", "inline"]
    },
    {
        question: "Difference between reset vs normalize CSS?. How do they differ?",
        answer: `**Reset CSS**: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same.          
**Normalize CSS**: Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies`,
        tags: ["css", "normalize css", "reset css"]
    },
    {
        question: "Explain CSS position property?",
        answer: `
- **Absolute**: Absolute position is actually set relative to the element's parent. if no parent is available then the relative place to the page itself (it will default all the way back up to the element).  
- **Relative**: "Relative to itself". Setting position: relative; on an element and no other positioning attributes, it will no effect on its positioning. It allows the use of z-index on the element and it limits the scope of absolutely positioned child elements. Any child element will be absolutely positioned within that block. 
- **Fixed**: The element is positioned relative to the viewport or the browser window itself. viewport doesn't change if you scroll and hence the fixed element will stay right in the same position.  
- **Static**: Static default for every single page element. The only reason you would ever set an element to position: static is to forcefully remove some positioning that got applied to an element outside of your control.  
- **Sticky**: Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.
`,
        tags: ["css", "position"]
    },
    {
        question: "What is cascading in CSS?",
        answer: `Cascading” refers to the process of going through the style declarations and defining weight or importance to the styling rules.  
         It helps the browser to select what rules have to be applied in times of conflict. The conflict here refers to multiple rules that are applicable to a particular HTML element.  
         In such cases, we need to let the browser know what style needs to be applied to the element. This is done by cascading down the list of style declarations elements.`,
        tags: ["css", "cascading"]
    },
    {
        question: "How is opacity specified in CSS3?",
        answer: `Opacity refers to the degree to which the content is transparent or opaque.  
        We can use the property named opacity which takes the values ranging from 0 to 1.  
        0 specifies that the element is completely transparent where 1 means that the element is completely opaque.  
        We can use the opacity property as follows:  
        ${"```"}
        div { 
            opacity: 0.6;
        }
        ${"```"}  
        The opacity property is not supported by the internet explorer browser.  
        To make it work there, we need to use filter property as polyfill as shown in the example below.
                ${"```"}
        div { 
            opacity: 0.6;
            filter: alpha(opacity=60);
        }
        ${"```"}  
        `,
        tags: ["css", "opacity"]
    },
    {
        question: "Why should we use float property in CSS?",
        answer: `The float property is used for positioning the HTML elements horizontally either towards the left or right of the container. For instance:  
         ${"```"}
         .float-demo {
                float: right;
            }
        ${"```"}  
        Here, the element to which the class is applied ensures that the element is positioned on the right of the container.`,
        tags: ["css", "float"]
    },
    {
        question: "What is a CSS Preprocessor? What are Sass, Less, and Stylus? Why do people use them?",
        answer: `A CSS Preprocessor is a tool used to extend the basic functionality of default vanilla CSS.  
        It helps us to use complex logical syntax like – variables, functions, mixins, code nesting, and inheritance to name a few, supercharging your vanilla CSS.
        **SASS**: Sass is the acronym for “Syntactically Awesome Style Sheets”. SASS can be written in two different syntaxes using SASS or SCSS
**SASS vs SCSS**  
- SASS uses .sass extension while SCSS uses .scss extension.  
- SASS doesn't use curly brackets or semicolons. SCSS uses it, just like the CSS.  
**LESS**: LESS is an acronym for “Leaner Stylesheets”  
LESS syntax is the same as the SCSS with some exceptions. LESS uses @ to define the variables.  
`,
        tags: ["css", "scss", "sass", "less"]
    },
    {
        question: "Is it important to test the webpage in different browsers?",
        answer: `It's most important to test a website in different browsers when you're first designing it, or when making major changes.  
        However, it's also important to repeat these tests periodically, since browsers go through a lot of updates and changes.`,
        tags: ["css", "test", "browser"]
    },
    {
        question: "What are Pseudo elements and Pseudo classes?",
        answer: `**Pseudo-elements** allows us to create items that do not normally exist in the document tree.  
- ::after - creates a new element  
- ::before - creates a new element  
- ::first-letter - changes a style for part of element.  
**Pseudo-classes** select regular elements but under certain conditions like when the user is hovering over the link.  
- :visited  
- :hover  
- :active  
- :focus  
- :first-child  
- :nth-child(2n+1)`,
        tags: ["css", "pseudo"]
    },
    {
        question: "Does margin-top or margin-bottom have an effect on inline elements?",
        answer: `No, it doesn’t affect the inline elements. Inline elements flow with the contents of the page.`,
        tags: ["css", "iniline", "margin"]
    },
    {
        question: "How do you specify units in the CSS?. What are the different ways to do it?",
        answer: `There are different ways to specify units in CSS like px, em, rem, percentage (%).  
- px: pixel,
- em: maintains relative size to parent element font-size. Example: width: 10rem,
- rem: maintains relative size to <html> font-size, the Root Em.  ,
- and some old units like pt, mm, cm from typography sphere`,
        tags: ["css", "units"]
    },
    {
        question: "What property is used for changing the font face?",
        answer: `We can use the font-family property for achieving this.  
        ${"```"}  
        p {
            font-family: "Roboto", Arial, sans-serif;
        }  
        ${"```"}  
- It tells the browser to look for “Roboto” font and apply it.  
- If the “Roboto” font is not installed or supported, then it asks the browser to use Times font.  
- If both “Roboto” and Arial are not supported, then it asks the browser to use any supported generic font belonging to sans-serif.`
        ,
        tags: ["css", "fonts"]
    },
    {
        question: "How is border-box different from content-box?",
        answer: `*Content-box* is the default value box-sizing property. The height and the width properties consist only of the content by excluding the border and padding.  
        The *border-box* property includes the content, padding and border in the height and width properties.`,
        tags: ["css", "border-box", "contetn-box"]
    },
    {
        question: "What do the following CSS selectors mean: *div,p / div p / div~p / div+p / div>p ?  ",
        answer: `
- **div,p** select all div elements and all p elements,  
- **div p** select all p elemenst inside div,  
- **div~p** select all p elements after div anywhere,  
- **div+p** select all p elements placed immediately after the div element,  
- **div>p** select all p elements which has div as an immediate parent.
`,
        tags: ["css", "syntax", "~", ">", "+"]
    },
    {
        question: "What are the properties of flexbox?",
        answer: `The properties of flexbox are as follows:  
- **flex-direction**: defines the direction in the container: *row*, *column*, *row-reverse*, *column-reverse*,  
- **flex-wrap**: specifies of the flex items should be wrapped or not: *wrap*, *no-wrap*, *wrap-reverse*,  
- **flex-flow**: is used for setting both *flex-direction* and *flex-wrap*,  
- **flex-grow**: used to stretch flex-items relative to other, the number. 1 means no stretch,
- **flex-shrink**: used to shrink flex-items relative to other, the number. 1 means no shrink,
- **flex-basis**: start width fo flex element, before changing: *auto*, *content* or just like a width in standart units,  
- **justify-content**: Used for aligning the flex items along the main direction: *center*, *flex-start*, *flex-end*, *space-around*, *space-between*, *baseline*, *space-evenly*, *stretch*,  
- **align-content**: it's like *justify-content*, used for aligning flex lines along auxiliary directon (can used with *flex-wrap*),  
- **align-items**: used for aligning the flex items along the auxiliary directon: *center*, *flex-start*, *flex-end*, *center*, *stretch
- **align-self**: changed the *align-items* value for one specific element`,
        tags: ["css", "flex"]
    },
    {
        question: "What are the different ways to hide the element using CSS?",
        answer: `
- **display: none;** The element will not exist in the DOM,
- **visibility: hidden;** The element will actually be present in the DOM, but not shown on the screen. The element will take up the space
- **opacity: 1;** The element wil be completely transparent,  
- **z-index: -1;** The element will lay under the parent element,
- **position: absolute;** The element can be placed outside the screen`,
        tags: ["css", "display", "visibility", "opacity"]
    },
    {
        question: "How do I restore the default value of a property?",
        answer: `The keyword *initial* can be used to reset it to its default value.`,
        tags: ["css", "initial", "default"]
    },
    {
        question: "What does !important mean in CSS?",
        answer: `The style is having the important will have the highest precedence and it overrides the cascaded property`,
        tags: ["css", "important"]

    },
    {
        question: "Difference between CSS grid vs flexbox?",
        answer: `
- CSS Grid Layout is a two-dimensional system, meaning it can handle both columns and rows. Grid layout is intended for larger-scale layouts which aren't linear in design.  
- Flexbox is largely a one-dimensional system (either in a column or a row). Flexbox layout is most appropriate to the components of an application.`,
        tags: ["css", "flex", "grid"]

    },
    {
        question: "How does Calc work?",
        answer: `The CSS3 calc() function allows us to perform mathematical operations on property values.  
        ${"```"}
        .example {
            width: calc(50px + 50%);
        }
        ${"```"}`,
        tags: ["css", "calc"]
    },
    {
        question: "How does CSS actually work (under the hood of browser)?",
        answer: `When a browser displays a document, it must combine the document's content with its style information. It processes the document in two stages:  
- The browser converts HTML and CSS into the DOM (*Document Object Model*). The DOM represents the document in the computer's memory. It combines the document's content with its style.  
- The browser displays the contents of the DOM.`,
        tags: ["css", "browser", "DOM"]
    }

];