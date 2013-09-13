'use strict';
$script.path('js/');
$script(
    [
        '../lib/angular/angular',
        'services/services',
        'directives/directives',
        'filters/filters',
        'controllers/controllers'
    ], function() {

        // Declare app level module which depends on filters, and services
        angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
        config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.when('/view1', {
                    templateUrl: 'views/partial1.html',
                    controller: 'MyCtrl1'
                });
                $routeProvider.when('/view2', {
                    templateUrl: 'views/partial2.html',
                    controller: 'MyCtrl2'
                });
                $routeProvider.otherwise({
                    redirectTo: '/view1'
                });
            }
        ]);
        angular.bootstrap(document, ['myApp']);
        console.log('read all js already');
    })