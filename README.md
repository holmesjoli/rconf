# Conference Notes

## HTML file

  - DOM: Document Object Model
  - Communicate the semantics of your document

### Head

 - Contains metadata about the document

### Body

 - Body contains content about the website which available to the user


### Block vs. Inline

 - New block element will start on a new line
 - Block elements can have inline content
 - Block takes up the whole width of the page
 - Inline elements do not have a width or a height of a page
 - Block <div>
 - Inline <span>
 - Tags are either block or inline, cannot be both
 - Block elements provide structure to a page

### Attribute
 - class
 - id
 - style: come from CSS writes CSS directly inside of HTML text
 - data: lets you develop your own attributes to hold information inside of your html element
 
### CSS
 - Set of rules that define how your webpage looks
 - CSS is presentation
 - Typography, color, position, borders, shadows, etc.
 - Three ways to write CSS:
  - Style tag in your HTML <style>
  - .css file
  - Inside another tag

```
selector {
  property: value;
  property: value;
}
```

### Javascript

 - Assignment is different in js than R
 - var new_var = 65 "polite way of doing it"
 - newer key words: const or let
 - const: variable that will not change
 - let: not a constant

```
let fruit = 'mango'

`My favorite fruit might be' ${fruit}`
``` 
  - R we have lists and js we have objects (JSON)
  - object: collection of named entries
  - Array: can put anything
  - js is 0 indexed
  - undefined: null
  - Both languages are functional, and can be object-oriented
  - Can store functions inside of objects
  - Function on an object is called a method
  - Properties on a an object is an attribute
  - JS runs in the browser

### Arrays

 - Arrays come with properties and methods
 - Push method modified the object in place, no assignment necessary
 - pop does the opposite of push
 - pop and push are methods of the array object
 - not all methods of arrays modify an array
 - sort orders the array and modified the array
 - No good syntax that tells you method will modified the array and which will not
 - keys of an array are just [0, 1, 2, 3, 4]
 - `Object.keys("obj_name")` will return the keys of an object

### Prototype and Inheritance

 - Capital letter is a constructor which makes object of specific type for you
 - Methods which are attached to the prototype are called static methods
 
### JS functions

 - Arguments are called by position rather than by name
 - Arguments only matter for inside the function
 - When calling the function, the position of the arguments is what matters
 - Arrow functions, relatively new in JS
```
const increment = (x, by = 1) => {
return x + by
}

const increment = (x) => x + 1
```

### Reactions not reactivity

 - listen for browser events (clicking, pressing a key, hovering), browser is keep track of those events that are happening
```
logo.addEventListener()
```

 - JS it's called a callback
 - Element (logo), Event (click), callback (showCard (which is a function written in JS))
 
 ### HTML Widgets

 - Widget embeds the data into HTML
 - NPM is javascripts package manager
 - package.json is js version of the DESCRIPTION file
 - commit package-json in your repo
 - inst is the folder with other things for the package are stored
 - Let you connect data to JS libraries without having to write a whole JS package
 - HTML Widgets is the easiest and fastest way to get a Shiny output

### R2D3

 - D3: Data-Driven Documents
 - Manipulating documents (DOM) based on data
 - D3 used to build SVGs
 - r2d3 is an R-package that lets you write D3
 - Solved annoyances with HTML widgets
 - r2d3 abstracts it away to focus on writing JS
 - R2D3 makes life better
 - hard to get data into a browser because it protects the user
 - Need a custom interactive visualization takes a lot more code and time
 - Find examples as a starting point
  - Observable (RMD/Jupyter of js)
  - Bl.ocks
 - Rstudio has a built in D3 script, good for prototyping
 - Limitations:
    - You have to supply all the logic
    - Data is in text
    - Isolated from the rest of HTML (shadow DOM)


### JQuery

 - About 86% of websites use jquery
 - jQuery let you do a lot of things more easily than you could before
 - shiny uses jquery
 - `$`: is jQuery, it's a variable
 - `-` is also a valid js variable name
 - jQuery adds extra methods, $ signals use of jQuery to use extra methods
 - Can write vanilla js with all of shiny, except with events
 - youmightnotneedjquery.com
 - youmightnotneedjs.com

### Golem
 - Software Engineering and R in production
 - Toolkit for building shiny application for production
 
### Shiny input binding

#### Methods
 - find: How to find your input elements on the page, gave it a particular class to be able to find it
 - subscribe: what browser events should trigger an update from your input
 - getRatePolicy: how often should shiny send updates back to the server, browser events range in how often they have updates. event triggers callback to browswer. Don't want everything to trigger a callback.
 - getValue: what is the value of the input
 - receiveMessage: let the input receive messages from the server
 - setValue: update HTML from the server
 - When you customize a method/object add an underscore