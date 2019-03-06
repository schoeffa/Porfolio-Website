"use strict";

function PortfolioService($location) {
    const self = this;
    
    self.loadAbout = () => {
        $location.path('/about');
    }
}

angular.module("App").service("PortfolioService", PortfolioService);