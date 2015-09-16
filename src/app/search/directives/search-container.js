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
        vm.loading = false;

        vm.searchUser = searchUser;

        function searchUser(event) {
            if(event.keyCode !== 13) return;

            vm.loading = true;

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
