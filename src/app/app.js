'use strict';

angular
    .module('github', [
        'ngRoute',

        'github.search',
        'github.users'
    ])
    .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/search/search.html'
        })
        .when('/users/:user', {
            templateUrl: 'views/users/user.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}
