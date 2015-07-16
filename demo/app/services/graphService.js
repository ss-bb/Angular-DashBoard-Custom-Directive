
app.service('graphService',['$http','$q', function ($http,$q) {

    /* This shoud be part of a 'UserService' -> Allow to get Custom Widget depending on user */

    function RecoverData(){
        return ['array','graph','map','image','chart'] // I just use a static array. You should have 
        /*
        $http.get(serverURL).
            success(function(data) {
                return data
            }).error(function(data) {
                alert('cant get fish data');
            });
*/
    }

    return({
        RecoverData: RecoverData
    });

}]);