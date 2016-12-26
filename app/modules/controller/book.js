ctrlLayer.controller('bookCtrl', [
    '$scope', '$location', 'collection', 'validator', 'PATH', 'DEFAULT',
    function ($scope, $location, collection, validator, PATH, DEFAULT) {

    $scope.createBook = function () {
        collection.add({
            id: collection.getMaxBookId() + 1,
            title: $scope.title,
            author: $scope.author,
            size: $scope.size,
            date: $scope.publication,
            isRead: false,
            image: $scope.loadedImage,
            description: $scope.description,
            reviews: []
        });

        $scope.clearForm();
        $location.path(PATH.HOME);
    };

    $scope.loadedImage = DEFAULT.IMAGE;

    $scope.hasImage = function () {
        collection.fileExists($scope.image).success(function (response) {
            $scope.loadedImage = $scope.image;
        }).error(function (error) {
            $scope.loadedImage = DEFAULT.IMAGE;
        });
    };

    $scope.clearForm = function () {
        $scope.title = null;
        $scope.author = null;
        $scope.size = null;
        $scope.publication = null;
        $scope.description = null;
        $scope.image = null;

        $scope.loadedImage = DEFAULT.IMAGE;

        $scope.book.$setPristine();
        $scope.book.$setUntouched();
    };

    $scope.isValidForm = function (form) {
        return form.size.$valid
            && form.title.$valid
            && form.author.$valid
            && form.publication.$valid
            && form.description.$valid;
    };

    $scope.getResult = function (input) {
        if (!input.$dirty) return validator.getByName("dirty");
        if (input.$error.required) return validator.getByName("required");
        if (input.$error.max) return validator.getByName("max");
        if (input.$error.min) return validator.getByName("min");
        return validator.getByName("success");
    }

}]);

// ctrlLayer.directive("bookParam", function () {
//     return {
//         restrict: "E",
//         templateUrl: "book-param.html",
//         scope: {
//             header: "@",
//             type: "@"
//         },
//         controller: ['validator', function (validator) {
//
//             this.getResult = function (input) {
//                 if (!input.$dirty) return validator.getByName("dirty");
//                 if (input.$error.required) return validator.getByName("required");
//                 if (input.$error.max) return validator.getByName("max");
//                 if (input.$error.min) return validator.getByName("min");
//                 return validator.getByName("success");
//             }
//
//         }],
//         controllerAs: "myCtrl"
//         // link: function (input) {
//         //     return scope.getResult(input);
//         // }
//     }
// });