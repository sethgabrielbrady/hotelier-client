(function() {
  'use strict';

  angular.module('hotel', ['ui.router'])
      .config(routerConfig);

      routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
      function routerConfig ($stateProvider, $urlRouterProvider){



        $stateProvider
        .state({
            name: 'home',
            url: '/home',
            templateUrl: 'views/home.template.html',
          })
          .state({
              name: 'login',
              url: '/login',
              templateUrl: 'views/login.template.html',
              controller: 'LoginController',
              controllerAs: 'loginCtrl'
          });


      }


}());
