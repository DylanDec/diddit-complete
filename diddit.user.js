// ==UserScript==
// @name         Diddit cheats
// @namespace    https://github.com/DylanDec/
// @version      2.2
// @description  Geen zin om taken te maken? Veel plezier xx
// @updateURL    https://github.com/DylanDec/diddit-complete/raw/master/diddit.user.js
// @downloadURL  https://github.com/DylanDec/diddit-complete/raw/master/diddit.user.js
// @author       dylandec
// @match        https://www.diddit.be/*
// @grant        https://www.diddit.be/*
// ==/UserScript==

window.addEventListener('keyup', function (e) {
  if (e.keyCode === 38) {
     alert("Alle opdrachten correct maken?");  // Aanduide dat opdrachten zullen updaten
const elements = Array.from(document.querySelectorAll(".ng-binding.ng-scope"));  // Zoeken voor onbegonnen taken
elements.forEach(element => {
  element.classList.add("exercise-achieved"); // Taak correct
});
const elements2 = Array.from(document.querySelectorAll(".ng-scope.exercise-started")); // Zoeken voor begonnen taken
elements2.forEach(element2 => {
  element2.classList.remove("exercise-started"); // Taak correct
});
      alert("Alle opdrachten zijn nu correct"); // Alert dat alles correct is
  }
}, false);
