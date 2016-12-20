ctrlLayer.controller('detailCtrl', [
    '$scope', '$routeParams', 'collection', function ($scope, $routeParams, collection) {

        $scope.book = collection.read($routeParams.bookId);



    }]);