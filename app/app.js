var app = angular.module('library', []);

app.service('server', ['$http', function ($http) {

    var collection = [];

    $http.get('data/collection.json').success(function (data) {
        collection = data;
    });

    this.getCollection = function () {
        return collection;
    };

    this.addIntoCollection = function (book) {
        collection.push(book);
    };

    var defaultImage = "pictures/unknown.jpg";

    this.getDefaultImage = function () {
        return defaultImage;
    }

}]);

app.controller('ManageBookCtrl', ['$scope', 'server', function ($scope, server) {

    $scope.createBook = function () {
        server.addIntoCollection({
            title: $scope.title,
            author: $scope.author,
            size: $scope.size,
            date: $scope.publication,
            isRead: false,
            image: server.getDefaultImage()
        })
    }

}]);

app.controller('ShowBookCtrl', ['$scope', 'server', function ($scope, server) {

    $scope.showBooks = function () {
        return server.getCollection();
    };

    $scope.sortProperty = null;
    $scope.sortReverse = false;

    $scope.orderBy = function (sortProperty) {
        $scope.sortReverse = $scope.sortProperty == sortProperty
            ? !$scope.sortReverse
            : $scope.sortReverse;
        $scope.sortProperty = sortProperty;
    };

    $scope.getBySize = function (size) {
        if (size < 400) return "info";
        return (size > 400 && size <= 1000)
            ? "warning" : "danger";
    };

    $scope.currentImage = server.getDefaultImage();

    $scope.showImage = function (image) {
        $scope.currentImage = image;
    };

}]);