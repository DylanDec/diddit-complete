// ==UserScript==
// @name         Diddit Taken Volledig
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Geen zin om taken te maken? Veel plezier xx
// @updateURL    https://raw.githubusercontent.com/DylanDec/diddit-complete/master/diddit.js
// @downloadURL  https://raw.githubusercontent.com/DylanDec/diddit-complete/master/diddit.js
// @author       dylandec
// @match        https://www.diddit.be/*
// @grant        https://www.diddit.be/*
// ==/UserScript==



window.addEventListener('keyup', function (e) {
  if (e.keyCode === 38) {
     alert("Alle opdrachten correct maken?");
const elements = Array.from(document.querySelectorAll(".ng-binding.ng-scope"));
elements.forEach(element => {
  element.classList.remove("ng-binding");
  element.classList.add("exercise-achieved");
});
const elements2 = Array.from(document.querySelectorAll(".ng-scope.exercise-started"));
elements2.forEach(element2 => {
  element2.classList.remove("exercise-started");
});
      alert("Alle opdrachten zijn nu correct");
  }
}, false);
