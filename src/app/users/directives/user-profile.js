'use strict';

angular
    .module('github.users')
    .directive('userProfile', userProfile);

userProfile.$inject = [
    '$routeParams',
    '$log',
    'search'
];

function userProfile($routeParams, $log, search) {
    var directive = {
        restrict: 'EA',
        controller: controller,
        controllerAs: 'userProfile',
        templateUrl: 'templates/users/user-profile.html'
    };

    return directive;

    function controller() {
        var vm = this;

        vm.loading = false;
        vm.repos = [];
        vm.username = $routeParams.username;
        vm.user = {};
        vm.orderRule = 'name';

        vm.init = init;
        vm.orderResults = orderResults;
        vm.getUser = getUser;
        vm.getRepos = getRepos;

        init();

        function init() {
            vm.getRepos();
            vm.getUser();
        }

        function orderResults(orderRule) {
            vm.orderRule = orderRule;
        }

        function getUser() {
            vm.loading = true;

            search
                .getUser(vm.username)
                .then(function(response) {
                    vm.user = response.data.items[0];
                });

        }

        function getRepos() {
            vm.loading = true;

            search
                .getRepos(vm.username)
                .then(function(response) {
                    vm.repos = response.data;
                    vm.loading = false;
                    $log.info(response);
                })
                .catch(function(response) {
                    $log.error(response);
                    vm.loading = false;
                    $log.error(response);
                });
        }
    }
}
