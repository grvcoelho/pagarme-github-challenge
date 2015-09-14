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
            template: '<h1>Search</h1>'
        })
        .when('/test/:user/', {
            template: '<h1>User</h1>'
        })
        .otherwise({
            redirectTo: '/'
        });
}
