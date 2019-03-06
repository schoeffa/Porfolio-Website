"use strict";
angular.module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/home", {template: "<home></home>" })
        .otherwise({redirectTo: "/home"})
    }]);