'use strict';

angular
    .module('github.search')
    .controller('SearchController', SearchController);

SearchController.$inject = [
    '$scope',
    '$log',
    '$search'
];

function SearchController($scope, $log, search) {
    var vm = this;

    vm.query = '';
    vm.users = [];

    vm.searchUser = searchUser;

    function searchUser() {
        search
            .searchUser(vm.query)
            .then(function(response) {
                $log.info(response.data);
                vm.users = response.data.items;
            });
    }
}
