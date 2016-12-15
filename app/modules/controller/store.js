ctrlLayer.controller('storeCtrl', [
    '$scope', 'library', 'config', function ($scope, library, config) {

    $scope.showBooks = function () {
        return library.get();
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

    $scope.currentImage = config.DEFAULT_IMAGE;

    $scope.showImage = function (image) {
        $scope.currentImage = image;
    };

}]);