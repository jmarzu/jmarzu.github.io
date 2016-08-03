var app = angular.module('JoePortfolio', ['ui.router', 'ngAnimate']);
console.log('in the app');

app.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('about' , {
        url: '/about',
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
      });
  }]);