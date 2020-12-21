// ==UserScript==
// @name         HOBBIT UI devtools
// @namespace    https://project-hobbit.eu/
// @version      0.1
// @match        https://master.project-hobbit.eu/*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    GM_registerMenuCommand("Open in locally running UI", () => {
        window.location = window.location.toString().replace('https://master.project-hobbit.eu/', 'http://localhost:4200/');
    }, "l");
})();
