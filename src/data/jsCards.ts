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
        question: "Why does comparing two similar objects in JavaScript return *false*?",
        answer: "JavaScript compares objects and primitives differently. In primitives it compares them by value while in objects it compares them by reference or the address in memory where the variable is stored.",
        tags: ["js", "object", "comparing"]
    },
    {
        question: "What does the !! operator do?",
        answer: `he Double NOT operator or !! coerces the value on the right side into a boolean.  
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
    }

];