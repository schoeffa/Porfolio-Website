"use strict";

const appFooter = {
    templateUrl: "../views/app-footer.html",
    controller: ["PortfolioService", function(PortfolioService) {
        const vm = this;
        this.loadAbout = () => {
            PortfolioService.loadAbout();
        }
        this.loadProjects = () => {
            PortfolioService.loadProjects();
        }
    }]
}

angular.module("App").component("appFooter", appFooter);