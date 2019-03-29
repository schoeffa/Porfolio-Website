"use strict";

function PortfolioService($location) {
    const self = this;
    
    self.loadAbout = () => {
        $location.path('/about');
    }
    self.loadProjects = () => {
        $location.path('/projects');
    }
}

angular.module("App").service("PortfolioService", PortfolioService);