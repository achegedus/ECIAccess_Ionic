app.controller('AlertsController', ['$scope', 'alerts', function($scope, alerts) {

    alerts.success(function(data){
        $scope.alertList = data;
    })

}]);
