var App = angular.module('App', ['ngRoute']);

App.controller('FinanceCtrl', function($scope, $http) {
  $http.get('http://www.bdfinanse.pl/bd_site/api/testimonials.php')
       .then(function(res){
          $scope.testimonials = res.data.records;
        });
  $http.get('http://www.bdfinanse.pl/bd_site/api/articles.php')
       .then(function(res){
          $scope.articles = res.data.articles;
        });
});

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html'
      }).
      when('/articles', {
        templateUrl: 'templates/articles.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
