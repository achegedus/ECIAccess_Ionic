app.controller('HealthController', ['$scope', 'pingdom', function($scope, pingdom) {

    pingdom.success(function(data){
        $scope.healthList = data;
    });

    $scope.doRefresh = function() {

        pingdom
            .success(function(data){
                $scope.healthList = data;
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });

    }

}]);
