"use strict";

const home = {
    templateUrl: "../views/home.html",
    controller: [function() {
        const vm = this;
        vm.paths = document.querySelectorAll(".logo");

    for (let path of vm.paths) {
        let length = path.getTotalLength();
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
        path.style.strokeDashoffset = '0';
    }
    }]
};

angular.module("App").component("home", home);