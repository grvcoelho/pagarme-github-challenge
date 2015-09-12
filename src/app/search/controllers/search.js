'use strict';

angular
    .module('github.search')
    .controller('SearchController', SearchController);

SearchController.$inject = [
    '$scope',
    '$log'
];

function SearchController($scope, $log) {
    var vm = this;

    vm.test = 'hey';
}
