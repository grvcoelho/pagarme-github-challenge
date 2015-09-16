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
        vm.user = $routeParams.user;

        vm.getRepos = getRepos;

        getRepos();

        function getRepos() {
            vm.loading = true;

            search
                .getRepos(vm.user)
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
