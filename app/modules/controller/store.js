ctrlLayer.controller('storeCtrl', [
    '$scope', 'collection', 'DEFAULT', function ($scope, collection, DEFAULT) {

    $scope.showBooks = function () {
        return collection.get();
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

    $scope.currentImage = DEFAULT.IMAGE;

    $scope.showImage = function (image) {
        $scope.currentImage = image;
    };

}]);