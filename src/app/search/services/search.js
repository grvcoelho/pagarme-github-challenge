'use strict';

angular
    .module('github.search')
    .service('search', search);

search.$inject = [
    '$http'
];

function search($http) {
    var service = this;

    service.getUser = getUser;
    service.getRepos = getRepos;

    function getUser(query) {
        var endpoint = 'https://api.github.com/search/users?q=' + query;

        return $http.get(endpoint);
    }

    function getRepos(user) {
        var endpoint = 'https://api.github.com/users/' + user + '/repos';

        return $http.get(endpoint);
    }
}
