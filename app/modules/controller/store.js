ctrlLayer.filter('slice', function() {
    return function(arr, start, end) {
        return arr.slice(start, end);
    };
});

ctrlLayer.controller('storeCtrl', [
    '$scope', '$location', 'collection', '$sce', 'DEFAULT',
    function ($scope, $location, collection, $sce, DEFAULT) {

        $scope.go = function (path) {
            $location.path(path);
        };

        $scope.totalRanges = function () {
            return Math.ceil(collection.getAll().length / $scope.count);
        };

        $scope.getTotalRanges = function () {
            var ranges = [];
            for (var i = 1; i <= $scope.totalRanges(); i++) {
                ranges.push(i);
            }
            return ranges;
        };

        $scope.selectedItemsOnPage = function () {
            return $scope.count;
        };

        $scope.setCurrentRange = function (range) {
            $scope.range = range;
        };

        $scope.range = 1;
        $scope.count = 5;
        $scope.from = null;
        $scope.to = null;
        $scope.items = [5, 10, 20];

        $scope.getClassOfCurrentRange = function (range) {
            return $scope.range == range ? "active" : "";
        };

        $scope.showBooks = function () {
            $scope.from = ($scope.range - 1) * $scope.count;
            $scope.to = $scope.range * $scope.count;
            return collection.getAll();
        };

        $scope.sortProperty = null;
        $scope.sortReverse = false;

        $scope.orderBy = function (sortProperty) {
            $scope.sortReverse =
                $scope.sortProperty == sortProperty
                ? !$scope.sortReverse
                : $scope.sortReverse;
            $scope.sortProperty = sortProperty;
        };

        $scope.arrow = function (property) {
            if (property == $scope.sortProperty) {
                return $sce.trustAsHtml(
                    $scope.sortReverse
                        ? '&#9660;'
                        : '&#9650;');
            } else {
                return $sce.trustAsHtml('&#8691;');
            }
        };

        $scope.isRemovable = function (removable) {
            return removable ? "danger" : "default";
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