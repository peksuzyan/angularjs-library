ctrlLayer.controller('bookCtrl', [
    '$scope', 'library', 'validator', 'config', function ($scope, library, validator, config) {

    $scope.createBook = function () {
        library.add({
            title: $scope.title,
            author: $scope.author,
            size: $scope.size,
            date: $scope.publication,
            isRead: false,
            image: config.DEFAULT_IMAGE
        })
    };

    $scope.isValidForm = function (form) {
        return form.size.$valid
            && form.title.$valid
            && form.author.$valid
            && form.publication.$valid;
    };

    $scope.getResult = function (input) {
        if (!input.$dirty) return validator.getByName("dirty");
        if (input.$error.required) return validator.getByName("required");
        if (input.$error.max) return validator.getByName("max");
        if (input.$error.min) return validator.getByName("min");
        return validator.getByName("success");
    }

}]);