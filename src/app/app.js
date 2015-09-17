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
        .when('/search', {
            templateUrl: 'views/search/search.html',
            reloadOnSearch: false
        })
        .when('/users/:username', {
            templateUrl: 'views/users/user.html'
        })
        .otherwise({
            redirectTo: '/search'
        });
}
