ctrlLayer.controller('bookCtrl', [
    '$scope', 'collection', 'validator', 'DEFAULT', function ($scope, collection, validator, DEFAULT) {

    $scope.createBook = function () {
        collection.add({
            title: $scope.title,
            author: $scope.author,
            size: $scope.size,
            date: $scope.publication,
            isRead: false,
            image: DEFAULT.IMAGE
        });

        $scope.clearForm();
    };

    $scope.clearForm = function () {
        $scope.title = null;
        $scope.author = null;
        $scope.size = null;
        $scope.publication = null;

        $scope.book.$setPristine();
        $scope.book.$setUntouched();
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