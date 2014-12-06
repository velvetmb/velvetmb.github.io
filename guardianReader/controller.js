var readerApp = angular.module('readerApp');

readerApp.controller('mainCtrl', ['$scope', '$location', function ($scope, $location) {
    //Store obj in scope for changing in child controller
    $scope.obj = {};
    $scope.obj.section = 'home';

    this.isInSection = function (section) {
        return $scope.obj.section == section;
    };

    this.search = function() {
        $location.url('search/' + $scope.searchText);
    };
}]);

readerApp.controller('defaultCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    //Load the articles
    $scope.isAddShow = true;
    $scope.obj.section = 'home';
    $scope.response = {};
    $scope.articles = [];
    var currentPage = 1;

    //Process the api link here
    var apiLink = 'http://content.guardianapis.com/search?api-key=test&show-fields=headline,trailText,thumbnail';

    var section = $routeParams.section;
    if (typeof section != 'undefined') {
        apiLink = apiLink + '&section=' + section;
        $scope.obj.section = section;
    }

    var query = $routeParams.query;
    if (typeof query != 'undefined') {
        apiLink = apiLink + '&q=' + query;
    }

    function displayAddMore() {
        if ($scope.response.currentPage >= $scope.response.pages) {
            $scope.isAddShow = false;
        } else {
            $scope.isAddShow = true;
        }
    }

    $http.get(apiLink).success(function (data) {
        $scope.response = data.response;
        $scope.articles = $scope.response.results;
        displayAddMore();
    });

    //Load more articles
    this.addArticles = function () {
        currentPage++;
        var apiPageLink = apiLink + '&page=' + currentPage;
        $http.get(apiPageLink).success(function (data) {
            $scope.response = data.response;
            $scope.articles = $scope.articles.concat(data.response.results);
            displayAddMore();
        });
    }

    this.openTwitter = function (article) {
        window.open("https://twitter.com/share?url=" + article.webUrl + '&text=' + article.fields.headline
            , "", "width=650, height=300, top=300, left=300");
    };
}]);