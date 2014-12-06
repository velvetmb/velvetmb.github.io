var readerApp = angular.module('readerApp', ['ngSanitize', 'ngRoute']);

//readerApp.directive('getTwitterCount', [
//    '$http', function ($http) {

//        function link(scope, element, attrs) {
//            var url = scope.article.webUrl;
//            var countUrl = 'http://urls.api.twitter.com/1/urls/count.json?url=' + url;
//            $http.get(countUrl).success(function (data) {
//                debugger;
//                alert(data.count);
//                scope.count = data.count;
//            });
//    }

//    return {
//        restrict: 'E',
//        template: '<p>Hello {{count}}</p>',
//        link: link
//    };
//}]);