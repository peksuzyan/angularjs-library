ctrlLayer.controller('detailCtrl', [
    '$scope', '$routeParams', 'validator', 'collection', '$location', '$anchorScroll',
    function ($scope, $routeParams, validator, collection, $location, $anchorScroll) {

        $scope.book = collection.read($routeParams.bookId);

        $scope.scores = [1,2,3,4,5];

        $scope.maxScore = function () {
            return Math.max.apply(null, $scope.scores);
        };

        $scope.hasReviews = function () {
            return $scope.book.reviews.length > 0;
        };

        $scope.hasDescription = function () {
            return $scope.book.description != ""
                && $scope.book.description != null;
        };

        $scope.openNewReview = function () {
            $scope.hasReview = !$scope.hasReview;
        };

        $scope.getAverageScore = function () {
            return collection.getAverageScore($scope.book);
        };

        $scope.formatDate = function (date) {
            return new Date(date);
        };

        $scope.createReview = function () {
            $scope.book.reviews.push({
                nickname: $scope.nickname,
                date: new Date(),
                score: $scope.score,
                content: $scope.content
            });

            $scope.clearForm();
            $scope.openNewReview();
        };

        $scope.clearForm = function () {
            $scope.nickname = null;
            $scope.content = null;

            $scope.review.$setPristine();
            $scope.review.$setUntouched();
        };

        $scope.isValidForm = function (form) {
            return form.content.$valid
                && form.nickname.$valid
                && form.score.$valid;
        };

        $scope.getResult = function (input) {
            if (!input.$dirty) return validator.getByName("dirty");
            if (input.$error.required) return validator.getByName("required");
            if (input.$error.max) return validator.getByName("max");
            if (input.$error.min) return validator.getByName("min");
            return validator.getByName("success");
        }

    }]);