'use strict';

angular
    .module('github.search')
    .service('$search', search);

search.$inject = [
    '$http'
];

function search($http) {
    var service = this;

    service.searchUser = searchUser;

    function searchUser(query) {
        var endpoint = 'https://api.github.com/search/users?q=' + query;

        return $http.get(endpoint);
    }
}
