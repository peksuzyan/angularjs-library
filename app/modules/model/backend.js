app.service('backend', [
    '$http', 'config', function ($http, config) {

    this.getCollection = {
        async: function () {
            return $http.get(config.COLLECTION).then(function (response) {
                return response.data;
            });
        }
    };

    this.getValidation = {
        async: function () {
            return $http.get(config.VALIDATION).then(function (response) {
                return response.data;
            });
        }
    };

}]);