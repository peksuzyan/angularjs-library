ctrlLayer.controller('storeCtrl', [
    '$scope', '$location', 'collection', 'DEFAULT', function ($scope, $location, collection, DEFAULT) {

        $scope.go = function (path) {
            $location.path(path);
        };

        $scope.showBooks = function () {
            return collection.getAll();
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

        $scope.removeBooks = function () {
            collection.removeAllSelected();
        };

        $scope.readyToRemove = function () {
            return collection.hasSelected();
        }

}]);