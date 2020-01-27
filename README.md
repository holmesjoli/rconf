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
 - 