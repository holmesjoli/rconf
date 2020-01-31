// Ref: https://shiny.rstudio.com/articles/building-inputs.html
// Ref: https://github.com/rstudio/shiny/blob/master/srcjs/input_binding.js

const typingSpeed = new Shiny.InputBinding();

$.extend(typingSpeed, {
  // When you customize a method add an underscore
  _timing: null,
  find: function(scope) {
    // Specify the selector that identifies your input. `scope` is a general
    // parent of your input elements. This function should return the nodes of
    // ALL of the inputs that are inside `scope`. These elements should all
    // have IDs that are used as the inputId on the server side.
    
    return scope.querySelectorAll('.typing-speed textarea');
  },
  getValue: function(el) {
    // For a particular input, this function is given the element containing
    // your input. In this function, find or construct the value that will be
    // returned to Shiny. The ID of `el` is used for the inputId.

    // e.g: return el.value
    if (!this._timing) {
     this._timing = Date.now();
     return;
    }
    
    let nWord = el.value.split(' ').length;
    let howLong = (Date.now() - this._timing) / 1000;
    
    return Date.now() - this._timing;
  },
  setValue: function(el, value) {
    // This method is used for restoring the bookmarked state of your input
    // and allows you to set the input's state without triggering reactivity.
    // Basically, reverses .getValue()

    // e.g.; el.value = value
    console.error('typingSpeed.setValue() is not yet defined');
  },
  receiveMessage: function(el, data) {
    // Given the input's container and data, update the input
    // and its elements to reflect the given data.
    // The messages are sent from R/Shiny via
    // R> session$sendInputMessage(inputId, data)
    console.error('typingSpeed.receiveMessage() is not yet defined');

    // If you want the update to trigger reactivity, trigger a subscribed event
    $(el).trigger("change");
  },
  subscribe: function(el, callback) {
    // Listen to events on your input element. The following block listens to
    // the change event, but you might want to listen to another event.
    // Repeat the block for each event type you want to subscribe to.

    el.addEventListener("keyup.typingSpeed", function(e) {
      // Use callback() or callback(true).
      // If using callback(true) the rate policy applies,
      // for example if you need to throttle or debounce
      // the values being sent back to the server.
      callback(true);
    });
  },
  getRatePolicy: function() {
    return {
      policy: 'debounce', // 'debounce', 'throttle' or 'direct' (default)
      delay: 100 // milliseconds for debounce or throttle
    };
  },
  unsubscribe: function(el) {
    $(el).off(".typingSpeed");
  }
});

Shiny.inputBindings.register(typingSpeed, 'js4shiny.typingSpeed');
