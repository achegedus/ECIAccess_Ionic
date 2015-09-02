/**
 * Created by adam on 9/1/15.
 */

app.factory('alerts', ['$http', function($http) {

    return $http.jsonp('http://access.energycap.com/index.php/welcome/get_alerts/2012-01-01')
        .success(function(data) {
            alert(data);
            return data;
        })
        .error(function(err) {
            return err;
        })

}]);