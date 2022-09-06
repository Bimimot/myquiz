import { TCard } from "../../types";

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
        Now it's a specification and it's a rudiment from first implementation JS.
        A fix was proposed to change typeof null == 'object' to typeof null == 'null' but was rejected because it will lead to more bugs.`,
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
        question: "JS specification doesn't have setTimeout() method. Why this method works?",
        answer: `This method belongs to WEB api (browser api)`,
        tags: ["js", "web api"]
    },
    {
        question: "How to check null?",
        answer: `The typeof ***null*** is **object**, so  
        we should use We can use strict equality operator to check if a value is null.
        ${"```"}
        if (value === null) { ... }
        ${"```"}
        `,
        tags: ["js", "types", "null"]
    },
    {
        question: "What is hoisting?",
        answer: `Hoisting means that a variable or function is moved to the top of their scope of where we defined the variable or function.  
JavaScripts moves function declarations to the top of their scope of we can reference them later and gets all variable declarations and give them the value of undefined.  
During execution, the variables that were hoisted are assigned a value or runs functions.  
Only function declarations and variables declared with the *var* keyword are hoisted.  
Variables declared with let and const constants aren't hoisted. Also, arrow functions and function expressions aren't hoisted.
${"```"}
foo();
function foo(){
 console.log('foo')
}
${"```"}  
*foo* is hoisted, so it can be called before it's defined since it's a function declaration
`,
        tags: ["js", "hoisting"]
    },
    {
        question: "What is Scope?",
        answer: `JavaScript's scope is the area where we have valid access to a variable or function.
There're 3 kinds of scopes in JavaScript:
- **global**: variables and functions that have global scope are accessible everywhere in the script,
- **function**: variables are only available inside a function,
- **block scope**: variables defined with *const* or *let* are only available inside a block (anything delimited by curly braces: *loop*. *if*).
`,
        tags: ["js", "scope"]
    },
    {
        question: "What are Closures?",
        answer: `Closures are functions that remember the variables and parameters on its current scope and all the way up to the global scope.  
        Closures are a way to return inner functions with some of the entities of the outer function included.  
        It's useful for keeping some things private while exposing some functionality.  
${"```"}
const foo = (() => {
  let x = 'Joe';
  const privateFn = () => {
    alert( "Helo, " + x );
  };
  return {
    publicFn() {
      privateFn();
    }
  }
})();
foo.publicFn();
${"```"}
        `,
        tags: ["js", "scope", "closures"]
    },
    {
        question: "What does the || operator do?",
        answer: `The || or Logical OR operator finds the first truthy expression in its operands and returns it. `,
        tags: ["js", "or", "||"]
    },
    {
        question: "What is the fastest way to converting a string to a number? ",
        answer: "According to MDN Documentation the + is the fastest way of converting a string to a number because it does not perform any operations on the value if it is already a number.",
        tags: ["js", "number", "converting", "string"]
    },
    {
        question: "Why does comparing two similar objects in JavaScript return false?",
        answer: "JavaScript compares objects and primitives differently. In primitives it compares them by value while in objects it compares them by reference or the address in memory where the variable is stored.",
        tags: ["js", "object", "comparing"]
    },
    {
        question: "What does the !! operator do?",
        answer: `The Double NOT operator or !! coerces the value on the right side into a boolean.  
        Basically it's a fancy way of converting a value into a boolean.`,
        tags: ["js", "!!"]
    },
    {
        question: "How to evaluate multiple expressions in one line? ",
        answer: `We can use the , or comma operator to evaluate multiple expressions in one line.  
        It evaluates from left-to-right and returns the value of the last item on the right or the last operand.
${"```"}
        let x = 5;
        x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);
        function addFive(num) {
        return num + 5;
        }
${"```"}
`,
        tags: ["js"]
    },
    {
        question: "What are Higher Order Functions? ",
        answer: `Higher-Order Function are functions that can return a function or receive argument or arguments which have a value of a function.  
${"```"}  
        function higherOrderFunction(param,callback){
            return callback(param);
        }

${"```"}`,
        tags: ["js", "HOF", "high order function"]
    },
    {
        question: "How to check if a value is falsy? ",
        answer: `Use the Boolean function or the Double NOT operator !!`,
        tags: ["js", "falsy", "boolean"]
    },
    {
        question: "What is the prototype of an object?",
        answer: `A prototype in simplest terms is a blueprint of an object 
        It is used as a fallback for properties and methods if it does exist in the current object.
        ${"```"}
        const o = {};
        console.log(o.toString()); // logs [object Object]
        ${"```"}
        It's the way to share properties and functionality between objects. It's the core concept around JavaScript's **Prototypal Inheritance**.
        Even though the *o.toString* method does not exist in the *o* object it does not throw an error instead returns a string *[object Object]*. When a property does not exist in the object it looks into its prototype and if it still does not exist it looks into the **prototype's prototype** and so on until it finds a property with the same in the **Prototype Chain**.
        The end of the **Prototype Chain** is the Object.prototype.

        console.log(o.toString === Object.prototype.toString); // logs true
        `,
        tags: ["js", "prototype", "object"]
    },
    {
        question: "What does the new keyword do?",
        answer: `The *new* keyword is used with constructor functions to make objects
in JavaScript.  
Suppose we have an example code below.  
${"```"}
function Employee(name, position, yearHired) {
  this.name = name;
  this.position = position;
  this.yearHired = yearHired;
};

const emp = new Employee("Marko Polo", "Software Developer", 2022);
${"```"}`,
        tags: ["js", "new"]
    },
    {
        question: "What is memoization and what's the use it?",
        answer: `*Memoization* is a process of building a function that is capable of **remembering** it's previously computed results or values.
The use of making a *memoization* function is that we avoid the computation of that function if it was already performed in the last calculations with the same arguments.
This saves time but has a downside that we will consume more memory for saving the previous results.`,
        tags: ["js", "memoization"]
    },
    {
        question: "What are the ways to deal with Asynchronous Code in JavasScript?",
        answer: `
- Callbacks,  
- Promises,
- async/await,
- or special libraries`,
        tags: ["js", "asynchronous"]
    },
    {
        question: "What is a Callback function?",
        answer: `A Callback function is a function that is gonna get called at a later point in time.
        ${"```"}
        const btnAdd = document.getElementById('btnAdd');

        btnAdd.addEventListener('click', function clickCallback(e) {
            // do something useless
        });
        ${"```"}  
In this example, we wait for the *click event* in the element with an id of **btnAdd**. When it is clicked, the clickCallback function is executed.  
A **Callback** function adds some functionality to some data or event.  
The reduce, filter and map methods in Array expects a callback as a parameter.  
A good analogy for a callback is when you call someone and if they don't answer you leave a message and you expect them to **callback**. 
        `,
        tags: ["js", "callback"]
    },
    {
        question: "What is AJAX?",
        answer: `**AJAX** stands for Asynchronous JavaScript and XML.  
        It is a group of related technologies used to display data asynchronously. 
        What this means is that we can send data to the server and get data from the server without reloading the web page.  
        Technologies use for AJAX.
- **HTML**, web page structure
- **CSS**, web page style
- **JavaScript** - the behaviour of the webpage and updates to the DOM,
- **XMLHttpRequest API** - used to send and retrieve data from the server,
- **PHP,Python,Nodejs** - Some Server-Side language`,

        tags: ["js", "AJAX"]
    },
    {
        question: "How to check if a certain property exists in an object?",
        answer: `There are three possible ways to check if a property exists in an object.  
- "prop" in someObject (return false or true),  
- someObject.hasOwnProperty("prop") (return false or true),
- someObj[prop] (retun *prop* or undefined)`,
        tags: ["js", "object"]
    },
    {
        question: "How to check if a value is an Array?",
        answer: `We can check if a value is an Array by using the Array.isArray method available from the Array global object.
        It returns true when the parameter pass to it is an Array otherwise false.
        Array.isArray([])
          
        If your environment does not support this method you can use the polyfill implementation.
        ${"```"}
           function isArray(value){
                return Object.prototype.toString.call(value) === "[object Array]"
            } 
        ${"```"}`,
        tags: ["js", "isArray"]
    },
    {
        question: "What is async/await and How does it work?",
        answer: `async/await is the new way of writing asynchronous or non-blocking code in JavaScript's.
        It is built on top of Promises.  
        #####Using Promises.  
        ${"```"}
            return fetch("url/to/api/endpoint")
                .then(resp => resp.json())
                .then(data => {
                    //do something with "data"
                })
                .catch(err => {
                    //do something with "err"
                });
        ${"```"}
          
        ####Using async/await.
        ${"```"}
        async function callApi() {
            try {
                const resp = await fetch("url/to/api/endpoint");
                const data = await resp.json();
                //do something with "data"
            } catch (e) {
                //do something with "err"
            }
            }
        ${"```"}
        `,
        tags: ["js"]
    },
    {
        question: "What is the Set object and how does it work?",
        answer: `The Set object is an ES6 feature that lets you store unique values, primitives or object references.  
        A value in a Set can only occur once.
        We can make Set instance using Set constructor and we can optionally pass an Iterable as the initial value.
        ${"```"}
            const set1 = new Set();
            const set2 = new Set(["a","b","c","d","d","e"]);
        ${"```"}
        We can add a new value into the Set instance using the add method and since the add returns the Set object we can chain add calls.  
        If a value already exists in Set object it will not be added again.
        ${"```"}
            set2.add("f");
            set2.add("g").add("h").add("i").add("j").add("k").add("k");
            // the last "k" will not be added
        ${"```"}  
        We can remove a value from the Set instance using the delete method,
        this method returns a boolean indicating true if a value exists in the Set object and false indicating that value does not exist.
        ${"```"}
            set2.delete("k")            
        ${"```"}  
        We can check if a specific value exists in the Set instance using the has method.
        ${"```"}
            set2.has("k")            
        ${"```"}
        We can get the length of the Set instance using the size property.
        ${"```"}
            set2.size            
        ${"```"}
        We can delete or remove all the elements in the Set instance using the clear.
        ${"```"}
            set2.clear();           
        ${"```"}
        We can use the Set object for removing duplicate elements in an array.
        ${"```"}
            const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
            const uniqueNums = [...new Set(numbers)];        
        ${"```"}
        `,
        tags: ["js", "set"]
    },
    {
        question: "What is Object Destructuring?",
        answer: `
        ###     Object Destructuring is a clean way of getting or extracting values from an object or an array.    
- let { firstName, lastName, position, yearHired } = employee;
          
        ### If we want to change the variable name we want to extract we use the *propertyName:newName* syntax.
- let { firstName: fName, lastName: lName, position } = employee;
          
        ### We can also have default values when destructuring.
- let { firstName = "Mark", lastName: lName, position, yearHired } = employee;`,
        tags: ["js", "object", "destructuring"]
    }

];