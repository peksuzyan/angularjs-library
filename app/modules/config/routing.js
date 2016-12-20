configLayer
    .config(function ($routeProvider) {
        $routeProvider
            .when('/books', {
                templateUrl: 'books.html',
                controller: 'storeCtrl'
            })
            .when('/add', {
                templateUrl: 'add.html',
                controller: 'bookCtrl'
            })
            .when('/show/:bookId', {
                templateUrl: 'details.html',
                controller: 'detailCtrl'
            })
            .otherwise({
                redirectTo: '/books'
            })
    });