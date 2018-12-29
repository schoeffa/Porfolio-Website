"use strict";

let paths = document.querySelectorAll(".logo");

for (let path of paths) {
    let length = path.getTotalLength();
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
    path.style.strokeDashoffset = '0';
}

