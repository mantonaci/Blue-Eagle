'use strict';

var mappaRomaAppControllers = angular.module('mappaRomaAppControllers', []);

mappaRomaAppControllers.controller('listController', ['$scope', 'mappaRomaAppService', '$routeParams', 
function($scope, mappaRomaAppService, $routeParams) {
    $scope.addressCorrente = $routeParams.addCurr; 
    mappaRomaAppService.getAll(function (r) {
        $scope.addressLst = r;
       
        for(var i in $scope.addressLst) {
            if($scope.addressCorrente+" " === $scope.addressLst[i].Indirizzo+"") {
                $scope.objCorr = $scope.addressLst[i];
                console.log("YEA");
                break;
            }
        }
        
        
    }, function (err) {
        console.log("Error", err)
    });
}]);

mappaRomaAppControllers.directive('myMaps', function() {
    return {
        restrict: 'AE',
        template: '<div></div>',
        replace: true,
        controller: 
        function($scope, $element){
            $scope.addressCorrente = $scope.addressCorrente;
            console.log("In directive controll: "+$scope.addressCorrente);
        },
        link:
        function(scope, element, attrs) {
            console.log("In directive link: "+scope.addressCorrente);
            var latlng = new google.maps.LatLng(41.97097760330028, 12.397041320800792);
            var mapOptions = {
                zoom: 17,
                center: latlng
            }
            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);            
            var gecoder =  new google.maps.Geocoder();
            gecoder.geocode({'address': scope.addressCorrente}, function(results, status){
                if (status == google.maps.GeocoderStatus.OK){
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({map: map, position: results[0].geometry.location});
                }
            });
            
        }
    };
    
})