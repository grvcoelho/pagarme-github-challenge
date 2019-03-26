(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular
    .module('github', [
        'ngRoute',

        'github.search',
        'github.users'
    ])
    .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/search', {
            templateUrl: 'views/search/search.html',
            reloadOnSearch: false
        })
        .when('/users/:username', {
            templateUrl: 'views/users/user.html'
        })
        .otherwise({
            redirectTo: '/search'
        });
}

},{}],2:[function(require,module,exports){
require('./app');
require('./search/');
require('./users/');

},{"./app":1,"./search/":5,"./users/":9}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

        vm.filter = '';

        vm.filterResults = filterResults;

        function filterResults(filter) {
            vm.filter = filter;
        }
    }
}

},{}],5:[function(require,module,exports){
require('./search');
require('./services/search');
require('./directives/search-container');
require('./directives/search-results');

},{"./directives/search-container":3,"./directives/search-results":4,"./search":6,"./services/search":7}],6:[function(require,module,exports){
'use strict';

angular
    .module('github.search', []);

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
                })
                .catch(function(response) {
                    $log.error(response);
                    vm.loading = false;
                    $log.error(response);
                });
        }
    }
}

},{}],9:[function(require,module,exports){
require('./users');
require('./directives/user-profile');

},{"./directives/user-profile":8,"./users":10}],10:[function(require,module,exports){
'use strict';

angular
    .module('github.users', []);

},{}]},{},[2])