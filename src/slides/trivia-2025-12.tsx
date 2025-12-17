interface TriviaQuestion {
  category: string;
  question: string;
  options: string[];
}

const triviaQuestions: TriviaQuestion[] = [
  {
    category: "New API's (html/css/js)",
    question:
      "Which new global JavaScript object is designed to replace the legacy `Date` API with a more reliable and timezone-aware system?",
    options: ["Chrono", "Temporal", "TimeZone", "DateTime"],
  },
  {
    category: "New API's (html/css/js)",
    question:
      "Which ECMAScript proposal introduces an operator that allows the result of one expression to be passed directly into the next?",
    options: [
      "Stream operator",
      "Sequence operator",
      "Flow operator",
      "Pipeline operator",
    ],
  },
  {
    category: "New API's (html/css/js)",
    question:
      "Which CSS feature allows an element to be positioned relative to another element without writing JavaScript?",
    options: [
      "Anchor Positioning API",
      "CSS Position Queries",
      "Relative Layout Model",
      "Element Binding API",
    ],
  },
  {
    category: "New API's (html/css/js)",
    question:
      "Which CSS at-rule enables styles to apply only to a specific section of the DOM, preventing selector leakage?",
    options: ["@region", "@subset", "@scope", "@context"],
  },
  {
    category: "New API's (html/css/js)",
    question:
      "What HTML feature allows an element—such as a button—to declaratively trigger an action (like opening a dialog) on a target element without JavaScript?",
    options: [
      "HTML Actions API",
      "Invoker Commands API",
      "Declarative Events API",
      "Element Control Attributes",
    ],
  },
  {
    category: "New API's (html/css/js)",
    question:
      "Which JavaScript API allows web applications to perform computations on a background thread and then synchronously access the result without blocking the main thread?",
    options: [
      "Web Workers",
      "Service Workers",
      "OffscreenCanvas",
      "Atomics + SharedArrayBuffer",
    ],
  },
  {
    category: "History of the Web",
    question: 'What major tech company trademarked the word "JavaScript"?',
    options: ["Sun Microsystems", "Microsoft", "Netscape", "Oracle"],
  },
  {
    category: "History of the Web",
    question: "What company created the V8 JavaScript engine?",
    options: ["Mozilla", "Google", "Apple", "Netscape"],
  },
  {
    category: "History of the Web",
    question:
      "What major event in 2010 caused Flash to rapidly decline in favor of HTML5?",
    options: [
      "The launch of Chrome",
      "Apple's refusal to support Flash on the iPhone/iPad",
      "Adobe discontinuing Flash Player",
      "A major Flash security breach",
    ],
  },
  {
    category: "History of the Web",
    question:
      "What was the name of the first widely-used JavaScript package manager?",
    options: ["npm", "bower", "yarn", "JamJS"],
  },
  {
    category: "History of the Web",
    question:
      "What influential 1996 web standard introduced inline frames (iframes)?",
    options: ["HTML 2.0", "HTML 3.2", "HTML 4.0", "XHTML 1.0"],
  },
  {
    category: "History of the Web",
    question:
      "Which npm package has the most installs of all time (direct installs)?",
    options: ["express", "react", "lodash", "axios"],
  },
  {
    category: "History of the Web",
    question:
      "Which JavaScript runtime existed before Node.js and ran JavaScript on the JVM?",
    options: ["Nashorn", "Rhino", "SpiderMonkey", "GraalJS"],
  },
  {
    category: "History of the Web",
    question:
      "In 2025, Microsoft announced it would be re-writing TypeScript in which language?",
    options: ["Rust", "C++", "Go", "Zig"],
  },
  {
    category: "JS Quirks",
    question: "Array.isArray(new Uint8Array(10)) evaluates to:",
    options: ["true", "false", "TypeError", "[object Uint8Array]"],
  },
  {
    category: "JS Quirks",
    question: "What is the result of the expression: [1,2] + [3,4]",
    options: ['"1,2,3,4"', "[1, 2, 3, 4]", "SyntaxError", '"1,23,4"'],
  },
  {
    category: "JS Quirks",
    question:
      "Which of the following is a VALID way to store data in the localStorage Web API?",
    options: [
      'localStorage.set("foo", "bar")',
      'localStorage.add("foo", "bar")',
      'localStorage.write("foo", "bar")',
      'localStorage.foo = "bar"',
    ],
  },
  {
    category: "JS Quirks",
    question:
      "Which of the following patterns becomes a specific SyntaxError when 'use strict' is enabled?",
    options: [
      "if (true) function f() { }",
      "delete object.prop",
      "function foo(a, a) { ... }",
    ],
  },
  {
    category: "JS Quirks",
    question: "Which of the following statements is true?",
    options: [
      "null instanceof Object",
      'typeof null === "object"',
      "null == NaN",
      "null === undefined",
    ],
  },
  {
    category: "JS Quirks",
    question:
      "What does JSON.stringify({ a: undefined, b: null, c: [undefined] }) return?",
    options: [
      '{"a":undefined,"b":null,"c":[undefined]}',
      '{"b":null,"c":[null]}',
      '{"a":null,"b":null,"c":[null]}',
      "Throws a TypeError",
    ],
  },
  {
    category: "Modern JavaScript Syntax & Features",
    question:
      "Which keyword allows you to declare a variable that cannot be reassigned?",
    options: ["let", "const", "final", "immutable"],
  },
  {
    category: "Modern JavaScript Syntax & Features",
    question: "What does the ?? operator do in JavaScript?",
    options: [
      "Returns the right operand if the left is null or undefined",
      "Returns the right operand if the left is falsy",
      "Performs null checking and throws an error",
      "Combines two values into an array",
    ],
  },
  {
    category: "Modern JavaScript Syntax & Features",
    question: "Which method allows you to create a shallow copy of an array?",
    options: [
      "[...array]",
      "array.slice()",
      "Array.from(array)",
      "All of the above",
    ],
  },
  {
    category: "Modern JavaScript Syntax & Features",
    question: "Which of the following is not a valid method on Promises?",
    options: [
      "Promise.race()",
      "Promise.settled()",
      "Promise.finally()",
      "Promise.try()",
    ],
  },
  {
    category: "Modern JavaScript Syntax & Features",
    question: 'What is the output of: [..."hello"]?',
    options: [
      '"hello"',
      '["h","e","l","l","o"]',
      '["hello"]',
      "Error: strings are not iterable",
    ],
  },
  {
    category: "Modern JavaScript Syntax & Features",
    question:
      "Which method returns a new array with all sub-array elements concatenated into it recursively up to a specified depth?",
    options: ["flatten()", "concat()", "merge()", "flat()"],
  },
  {
    category: "JavaScript Culture & Ecosystem",
    question: 'What does "Deno" (the Node.js alternative) stand for?',
    options: [
      "Destroy Node",
      "Decentralized Node",
      "Design Node",
      "It doesn't stand for anything",
    ],
  },
  {
    category: "JavaScript Culture & Ecosystem",
    question: "What year was Node.js first released?",
    options: ["2005", "2007", "2009", "2011"],
  },
  {
    category: "JavaScript Culture & Ecosystem",
    question: "What is the most starred JavaScript project on GitHub?",
    options: ["React", "Vue.js", "freeCodeCamp", "Node.js"],
  },
  {
    category: "JavaScript Culture & Ecosystem",
    question:
      "What infamous npm package with only 11 lines of code broke thousands of projects when unpublished in 2016?",
    options: ["left-pad", "is-array", "pad-left", "string-pad"],
  },
  {
    category: "JavaScript Culture & Ecosystem",
    question: 'What does "JSX" stand for?',
    options: [
      "JavaScript Extension",
      "JavaScript XML",
      "Reactive JavaScript",
      "JavaScript Syntax",
    ],
  },
];

const Trivia202512 = () => {
  return (
    <>
      {triviaQuestions.map((q, index) => (
        <section key={index}>
          <div className="triviaWrapper">
            <div className="trivia-question">
              <span className="category">{q.category}</span>
              <h2>{q.question}</h2>
              <ul className="options">
                {q.options.map((option, optIndex) => (
                  <li key={optIndex}>
                    <span className="option-letter">
                      {String.fromCharCode(65 + optIndex)}
                    </span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Trivia202512;
