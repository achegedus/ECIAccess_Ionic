/**
 * Created by adam on 9/1/15.
 */

app.factory('eci_alerts', ['$http', function($http) {

    return $http.get('http://access.energycap.com/index.php/welcome/get_alerts/2012-01-01')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        })

}]);