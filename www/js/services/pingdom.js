/**
 * Created by adam on 9/1/15.
 */

app.factory('pingdom', ['$http', function($http) {

    var req = {
        method: 'GET',
        url: 'https://www.statuscake.com/API/Tests/',
        headers: {
            'API': 'eiGngLF2967TN9Ybh3Rq',
            'Username': 'eciosc',

        }
    }


    return $http(req)
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        })

}]);