var readerApp = angular.module('readerApp');

readerApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'newsDivTmpl',
              controller: 'defaultCtrl as ctrl'
          })
          .when('/search/:query', {
              templateUrl: 'newsDivTmpl',
              controller: 'defaultCtrl as ctrl'
          })
          .when('/section/:section', {
              templateUrl: 'newsDivTmpl',
              controller: 'defaultCtrl as ctrl'
          })
          .otherwise({
              redirectTo: '/'
          });
    }]);