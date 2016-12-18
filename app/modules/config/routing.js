configLayer
    .config(function ($routeProvider) {
        $routeProvider
            .when('/books', {
                templateUrl: 'books.html'
            })
            .when('/add', {
                templateUrl: 'add.html'
            })
            .otherwise({
                redirectTo: '/books'
            })
    });