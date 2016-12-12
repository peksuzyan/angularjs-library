var app = angular.module('library', []);

app.controller('LibraryCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.defaultImage = "pictures/unknown.jpg";

    $scope.sortProperty = null;
    $scope.sortReverse = false;

    $scope.orderBy = function (sortProperty) {
        $scope.sortReverse = $scope.sortProperty == sortProperty
            ? !$scope.sortReverse
            : $scope.sortReverse;
        $scope.sortProperty = sortProperty;
    };

    $scope.collection = [];

    $http.get('library-books.json').success(function (data) {
        $scope.collection = data;
    });

    $scope.getBySize = function (size) {
        if (size < 400) return "info";
        return (size > 400 && size <= 1000)
            ? "warning" : "danger";
    };

    $scope.currentImage = $scope.defaultImage;

    $scope.showImage = function (image) {
        $scope.currentImage = image;
    };

}]);