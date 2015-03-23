var neuron = angular.module('neuron', ['ngRoute']);

neuron.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'view/neuron.html',
            controller: 'neuronController'
        }).
        when('/404', {
            templateUrl: 'view/404.html'
            //   controller: 'ShowOrdersController'
        }).
        otherwise({
            redirectTo: '/404'
        });
}]);
