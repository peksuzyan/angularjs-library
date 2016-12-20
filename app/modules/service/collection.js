serviceLayer.factory('collection', [
    'backend', function (backend) {

    var library = {};

    var collection = [];

    backend.getCollection.async().then(function (data) {
        collection = data;
    });

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

    return library;

}]);