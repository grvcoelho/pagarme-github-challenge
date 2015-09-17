'use strict';

angular
    .module('github.search')
    .directive('searchContainer', searchContainer);

searchContainer.$inject = [
    '$routeParams',
    '$location',
    '$log',
    'search'
];

function searchContainer($routeParams, $location, $log, search) {
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
        vm.query = $location.search().query || '';
        vm.loading = false;

        vm.init = init;
        vm.searchQuery = searchQuery;
        vm.getUser = getUser;

        vm.init();

        function init() {
            if(vm.query) {
                vm.getUser();
            }
        }

        function searchQuery(event) {
            if(event.keyCode === 13) {
                vm.getUser();
            }
        }

        function getUser() {
            vm.loading = true;

            $location.search('query', vm.query);

            search
                .getUser(vm.query)
                .then(function(response) {
                    vm.results = response.data.items;
                    vm.loading = false;
                })
                .catch(function(response) {
                    $log.error(response);
                    vm.loading = false;
                });
        }
    }
}
