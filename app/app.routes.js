app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/coding', {
                templateUrl: 'app/shared/projectTemplate/projectTemplateView.html',
                controller: 'codingController',
                controllerAs: 'coding'
            })
            .when('/experience', {
                templateUrl: 'app/shared/projectTemplate/projectTemplateView.html',
                controller: 'experienceController',
                controllerAs: 'experience'
            })
            .when('/blog', {
                templateUrl: 'app/shared/projectTemplate/projectTemplateView.html',
                controller: 'blogController',
                controllerAs: 'blog'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }])
