serviceLayer.factory('collection', [
    'backend', function (backend) {

    var library = {};

    var collection = [];

    backend.getCollection.async().then(function (data) {
        collection = data;
    });

    library.removeAllSelected = function () {
        var selected = this.getAllSelected();
        for (var i = 0; i < selected.length; i++) {
            var index = collection.indexOf(selected[i]);
            if (index > -1) collection.splice(index, 1);
        }
    };

    library.hasSelected = function () {
        return this.getAllSelected().length > 0;
    };

    library.getAllSelected = function () {
        var selected = [];
        for (var i = 0; i < collection.length; i++) {
            if (collection[i].isRead) selected.push(collection[i]);
        }
        return selected;
    };

    library.fileExists = function (url) {
        return backend.fileExists(url);
    };

    library.getAll = function () {
        return collection;
    };

    library.add = function (book) {
        collection.push(book);
    };

    library.read = function (id) {
        for (var i = 0; i < collection.length; i++) {
            if (id == collection[i].id) return collection[i];
        }
    };

    library.getMaxBookId = function () {
        var max = 1;
        for (var i = 0; i < collection.length; i++) {
            if (max < collection[i].id) max = collection[i].id;
        }
        return max;
    };

    library.getAverageScore = function (book) {
        var totalScore = 0;
        for (var i = 0; i < book.reviews.length; i++) {
            totalScore += Number(book.reviews[i].score);
        }
        return book.reviews.length > 0
            ? (totalScore / book.reviews.length) : 0;
    };

    return library;

}]);