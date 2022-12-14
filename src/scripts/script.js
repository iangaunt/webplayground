"use strict";
exports.__esModule = true;
/* Imports */
var React = require("react");
/* Elements */
var title = document.getElementById("title");
var titleContainer = document.getElementById("title-container");
var circle = document.getElementById("cursor-border");
/* Variables */
var titleLimit = 275;
/* Classes */
/**
 * A class for building hotbar navigation buttons.
 * @class
 *
 *
 *
 */
var Nav = /** @class */ (function () {
    function Nav(newText) {
        this.text = newText.toUpperCase();
        this.id = "#" + this.text.toLowerCase().replace(' ', '-');
    }
    Nav.prototype.build = function () {
        return (<a href={this.id}>{this.text}</a>);
    };
    return Nav;
}());
/* Functions */
/**
 * Performs boundary box calculations and returns a property string with the correct orientations to face the mouse.
 *
 * @param x - X coordinate.
 * @param y - Y coordinate.
 * @param el - The HTML element on which the calculations will be done.
 *
 * @returns string of CSS property values.
 *
 * */
function calculateRotation(x, y, el) {
    // Calculate the boundaries and rotations. 
    var box = el.getBoundingClientRect();
    var calcX = -(y - box.y - (box.height / 2)) / titleLimit;
    var calcY = (x - box.x - (box.width / 2)) / titleLimit;
    // Depending on the rotations, color shift the title to show a shadow. 
    if (calcX < calcY) {
        var colorShift = 255 - Math.abs(calcX - calcY) * 16;
        var colorString = "rgb(" + colorShift + ", " + colorShift + ", " + colorShift + ")";
        title.style.color = colorString;
    }
    else {
        title.style.color = "rgb(255, 255, 255)";
    }
    // Return the new rotational String after color adjustments 
    return "perspective(150px) " + "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
}
;
/**
 * Applies rotational style effects to the passed-in CSS element.
 *
 * @param el - The element which the transformation is applied on.
 * @param xyEl - The XY of the element.
 *
 * */
function transformElement(el, xyEl) {
    el.style.transform = calculateRotation.apply(null, xyEl);
    el.style.transitionDuration = "0.1s";
}
/**
 * Applies stylistic effects to the cursor ring depending on the state of the mouse.
 *
 * @param setting - Selects a particular index in the contained effect arrays, which picks a particular stylistic effect.
 *
 */
function transformCursor(setting) {
    var arrSize = [6, 9];
    var arrColors = ["rgba(0, 0, 0", "rgba(255, 255, 255"];
    circle.style.width = arrSize[setting] + "px";
    circle.style.height = arrSize[setting] + "px";
    circle.style.border = "2px solid " + arrColors[setting] + ")";
    circle.style.boxShadow = "2px solid " + arrColors[setting] + ", 0.6)";
}
/** Applies perspective transformation if the mouse is inside the element. */
title.onmousemove = function (e) {
    var xy = [e.clientX, e.clientY];
    var position = xy.concat([titleContainer]);
    window.requestAnimationFrame(function () {
        transformElement(titleContainer, position);
    });
};
/** Moves the circle to align directly with the cursor. */
document.addEventListener("mousemove", function (e) {
    circle.style.left = (e.pageX + 3.5) + 'px';
    circle.style.top = (e.pageY + 3.5) + 'px';
});
/** Changes the style of the circle depending on if the mouse is up or down. */
document.addEventListener("mousedown", function () { transformCursor(1); });
document.addEventListener("mouseup", function () { transformCursor(0); });
/** Adds a blur effect to the header when the user scrolls. */
/* $(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs! = pixs! / 100;
    $(".opener").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })
}); */
