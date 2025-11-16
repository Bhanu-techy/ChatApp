
const sessions = [
  { id: 1, 'title': "Python Questions",
     'conversation':[
    {"no":11, 
      "question":"What is a dictionary in Python",
      "answer":"A dictionary stores data as key-value pairs and is unordered and mutable.",
      "tabluarResponse" : [
            {
        id : 1,
        "Feature": "Definition",
        "Description": "A dictionary is a collection of key–value pairs in Python.",
          "Example": "{\"name\": \"John\", \"age\": 25}"
        },
        {
          id :2,
          "Feature": "Mutability",
          "Description": "Dictionaries are mutable → you can add, update, or remove items.",
          "Example": "dict[\"age\"] = 30"
        },
        {
          id:3,
          "Feature": "Syntax",
          "Description": "Curly braces {}, key: value.",
          "Example": "{\"key\": \"value\"}"
        }]   
        },
    {
      id: 12,
      "question": "What is a lambda function",
      "answer": "A lambda function is a small anonymous function defined using the lambda keyword.",
      "tabluarResponse" :[       
          {
        id:1,
        "Feature": "Purpose",
        "Description": "Used for short, simple functions instead of full def functions.",
        "Example": "-"
      },
      {
        id:2,
        "Feature": "Syntax",
        "Description": "Uses the keyword lambda followed by parameters and an expression.",
        "Example": "lambda a, b: a * b"
      },
      {
        id:3,
        "Feature": "Use Case",
        "Description": "When a short function is needed temporarily.",
        "Example": "Inline functions"
      }
      ]
    },
    {
      id: 13,
      "question": "What are Python modules",
      "answer": "Modules are files containing Python code (functions, classes) that can be imported into other programs.",
      "tabluarResponse" : [
        {
          id:1,
        "Feature": "Extension",
        "Description": "Modules are usually Python files with .py extension.",
        "Example": "mymodule.py"
      },
      {
        id:2,
        "Feature": "Built-in Modules",
        "Description": "Python comes with many pre-installed modules.",
        "Example": "os, math, random"
      },
      {
        id:3,
        "Feature": "Purpose",
        "Description": "Helps organize code and reuse functionality across programs.",
        "Example": "Reusable helper functions"
      },
      ]
    }
]},
  { id: 2, 'title': "Java script", 'conversation':[{
      id: 21,
      "question": "What is DOM",
      "answer":  "DOM is a programming interface that represents an HTML document as a tree structure.",
      "tabluarResponse" : [{
        id: 1,
        "Feature": "Full Form",
        "Description": "Document Object Model",
        "Example": "-"
      },
      {
        id:2,
        "Feature": "Purpose",
        "Description": "Allows JavaScript to access and manipulate HTML elements.",
        "Example": "Change text, styles, attributes"
      },{
        id:3,
        "Feature": "Accessing Elements",
        "Description": "Elements can be selected using DOM methods.",
        "Example": "document.getElementById()"
      }]
    },
    {
      "id": 22,
      "question": "What are Events",
      "answer": "Handling user interacting with the Document Object Model (DOM) to dynamically change web page content and style.",
      "tabluarResponse" : [{
            id:1,
        "Event Type": "Click Event",
        "Description": "Triggered when a user clicks an element.",
        "Example": "onclick, addEventListener('click')"
      },
      {
        id:2,
        "Event Type": "Mouse Events",
        "Description": "Actions performed with the mouse.",
        "Example": "mouseover, mouseout, mousemove"
      },
      {
        id:3,
        "Event Type": "Keyboard Events",
        "Description": "Triggered when a user presses or releases a key.",
        "Example": "keydown, keyup, keypress"
      },
      {
        id:4,
        "Event Type": "Form Events",
        "Description": "Triggered by form actions.",
        "Example": "submit, change, input"
      },]
    },{
      "id": 3,
      "question": "What are varibles",
      "answer": "A variable is a container used to store data values.",
          "tabluarResponse" : [{
        id:1,
        "Feature": "Purpose",
        "Description": "Helps store and reuse values in a program.",
        "Example": "Storing user age, name, scores"
      },
      {
        id:2,
        "Feature": "Naming Rules",
        "Description": "Cannot start with a number; no spaces; no special characters except _.",
        "Example": "user_name, age1"
      },
      {
        id:3,
        "Feature": "Mutable?",
        "Description": "Variables in most languages can change (mutable).",
        "Example": "x = 5 → x = 7"
      }]
        }
  ]},
  { id: 3, 'title': "React JS", 'conversation':[{
      "id": 31,
      "question": "What is virtual dom",
      "answer": "The Virtual DOM is a lightweight copy of the real DOM used by libraries like React to optimize UI updates.",
        "tabluarResponse" : [{
      id:1,
      "Feature": "Purpose",
      "Description": "Makes UI updates faster by avoiding direct manipulation of the real DOM.",
      "Example": "Efficient re-rendering"
    },
    {
      id:2,
      "Feature": "How it works",
      "Description": "React creates a virtual DOM tree, compares it with the previous version, and updates only changed parts in the real DOM.",
      "Example": "Diffing + Reconciliation"
    },
    {
      id:3,
      "Feature": "Performance Benefit",
      "Description": "Reduces expensive real DOM operations, improving speed.",
      "Example": "Updates only the changed node"
    }]
    },
    {
      "id": 32,
      "question": "What are lifecycle methods",
      "answer": "In React, the lifecycle methods refers to the various stages a component goes through. These stages allow developers to run specific code at key moments, such as when the component is created, updated, or removed.",
      "tabluarResponse" : [
        {
        id:1,
        "Feature": "componentDidMount()",
        "Description": "Runs after first render. Used for API calls, subscriptions.",
        "Example": "Fetching data"
        },
        {
        id:2,
        "Feature": "shouldComponentUpdate()",
        "Description": "Controls whether component should re-render.",
        "Example": "Performance optimization"},
          {
        id:3,
        "Feature": "componentWillUnmount()",
        "Description": "Cleanup before component is removed.",
        "Example": "Clear timers, remove listeners"},]
    },{
      "id": 33,
      "question": "What is context api",
      "answer": "The Context API is a way to create global data/state in React so that any component can access it directly, no matter how deep it is in the component tree.",
      "tabluarResponse" : [{
    id :1,
    "Feature": "Avoids Prop Drilling",
    "Description": "Prevents passing props through multiple levels manually.",
    "Example": "Parent → Child → GrandChild (not needed when using context)"
  },
  {
    id:2,
    "Feature": "Creates Global State",
    "Description": "Allows sharing data across the entire app.",
    "Example": "Theme, language, authentication states"
  },
  {
    id:3,
    "Feature": "Provider Component",
    "Description": "Wraps components and supplies the data.",
    "Example": "<MyContext.Provider value={data}>"
  },
  {
    id:4,
    "Feature": "useContext Hook",
    "Description": "Used to access context data inside any component.",
    "Example": "const value = useContext(MyContext);"
  },]
    },
  ]},
];

module.exports = { sessions };
