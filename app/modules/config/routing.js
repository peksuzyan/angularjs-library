configLayer
    .config(function ($routeProvider, PATH) {
        $routeProvider
            .when(PATH.HOME, {
                templateUrl: 'books.html',
                controller: 'storeCtrl'
            })
            .when(PATH.BOOK_REGISTRATION, {
                templateUrl: 'add.html',
                controller: 'bookCtrl'
            })
            .when(PATH.BOOK_DETAILS, {
                templateUrl: 'details.html',
                controller: 'detailCtrl'
            })
            .otherwise({
                redirectTo: PATH.HOME
            })
    });