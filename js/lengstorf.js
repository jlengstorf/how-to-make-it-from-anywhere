'use strict';

(function () {

  'use strict';

  // We'll reference this element several times
  var htmlElement = document.querySelector('html');

  // Bind a function to the `fragmentshown` event so we can do some custom bits
  Reveal.addEventListener('fragmentshown', function (event) {
    var fragment = event.fragment;

    // For fragments with a `dim-the-lights` class, we dim the lights
    if (fragment.classList && fragment.classList.contains('dim-the-lights')) {
      htmlElement.classList.add('blackout');
    }
  });

  // Define a quick function to remove the blackout class from the document
  var removeBlackout = function removeBlackout() {
    return htmlElement.classList.remove('blackout');
  };

  // Bind the function to Reveal actions so we get the desired effect
  Reveal.addEventListener('fragmenthidden', removeBlackout);
  Reveal.addEventListener('slidechanged', removeBlackout);

  // For fun, let's play with type
  function wrapLetters(element) {
    if (type) {
      var replace = '<span>$&</span>';
      var text = type.innerText.replace(/([^\x00-\x80]|\w)/g, replace);

      type.innerHTML = text;
    }
  };

  var type = document.querySelector('.demolish');

  wrapLetters(type);
})();
//# sourceMappingURL=lengstorf.js.map