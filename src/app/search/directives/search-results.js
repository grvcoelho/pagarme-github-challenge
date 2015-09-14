'use strict';

angular
    .module('github.search')
    .directive('searchResults', searchResults);

searchResults.$inject = [
    '$log'
];

function searchResults($log) {
    var directive = {
        restrict: 'EA',
        controller: controller,
        controllerAs: 'searchResults',
        templateUrl: 'templates/search/search-results.html',
        scope: {
            results: '='
        },
        bindToController: true,
    };

    return directive;

    function controller($scope) {
        var vm = this;
    }
}
