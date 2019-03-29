"use strict";
angular.module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/home", {template: "<home></home>" })
        .when("/about", {template: "<about></about>"})
        .when("/projects", {template: "<projects></projects>"})
        .otherwise({redirectTo: "/home"})
    }]);