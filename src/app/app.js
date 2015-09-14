'use strict';

angular
    .module('github', [
        'ngRoute',

        'github.search'
    ])
    .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/search/search.html'
        })
        .when('/user/:user/', {
            templateUrl: 'views/search/user.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}
