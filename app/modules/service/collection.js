serviceLayer.factory('collection', [
    'backend', function (backend) {

    var library = {};

    var collection = [];

    backend.getCollection.async().then(function (data) {
        collection = data;
    });

    library.get = function () {
        return collection;
    };

    library.add = function (book) {
        collection.push(book);
    };

    return library;

}]);