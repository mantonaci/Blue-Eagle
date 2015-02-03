var brecciaStoreService = angular.module('mappaRomaAppService', []);

brecciaStoreService.factory('mappaRomaAppService',
    function ($http) {
        return { getAll: 
                function (finish, err) {
                    $http.get('http://www.mocky.io/v2/545eb6ec33a0a9e712f28d78').success(finish).error(err);
                }
        };
    });