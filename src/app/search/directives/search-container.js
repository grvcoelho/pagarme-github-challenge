'use strict';

angular
    .module('github.search')
    .directive('searchContainer', searchContainer);

searchContainer.$inject = [
    '$log',
    'search'
];

function searchContainer($log, search) {
    var directive = {
        restrict: 'EA',
        controller: controller,
        controllerAs: 'searchContainer',
        templateUrl: 'templates/search/search-container.html'
    };

    return directive;

    function controller() {
        var vm = this;

        vm.results = [];
        vm.query = '';

        vm.searchUser = searchUser;

        function searchUser() {
            search
                .searchUser(vm.query)
                .then(function(response) {
                    vm.results = response.data.items;
                    $log.info(vm.results);
                })
                .catch(function(response) {
                    $log.error(response);
                });
        }
    }
}
