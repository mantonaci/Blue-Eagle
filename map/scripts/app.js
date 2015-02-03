'use strict';

var mappaRomaApp = angular.module('mappaRomaApp', ['ngRoute', 'mappaRomaAppControllers', 'mappaRomaAppService']);

mappaRomaApp.config(['$routeProvider', '$httpProvider', 
    function ($routeProvider, $httpProvider) {
        $routeProvider
        .when('/app/', {
            templateUrl: 'parts/addressList.html',
            controller: 'listController'
        })
        .when('/app/:addCurr', {
            templateUrl: 'parts/addressList.html',
            controller: 'listController'
        }).
        otherwise({
            redirectTo: '/app/'
        });
    }
]);
