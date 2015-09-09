app.controller('AlertsController', ['$scope', 'eci_alerts', function($scope, eci_alerts) {

    eci_alerts.success(function(data){
        $scope.alertList = data;
    });

    $scope.doRefresh = function() {

        eci_alerts
            .success(function(data){
                $scope.alertList = data;
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });

    }
}]);