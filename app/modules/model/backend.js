modelLayer.service('backend', [
    '$http', 'PATH', function ($http, PATH) {

    this.getCollection = {
        async: function () {
            return $http.get(PATH.COLLECTION).then(function (response) {
                return response.data;
            });
        }
    };

    this.getValidation = {
        async: function () {
            return $http.get(PATH.VALIDATION).then(function (response) {
                return response.data;
            });
        }
    };

}]);