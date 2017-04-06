(function() {
  'use strict';

  angular.module('hotel', ['ui.router'])
      .config(routerConfig);

      routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
      function routerConfig ($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('', '/');

        $urlRouterProvider.otherwise('/not-found');

        $stateProvider
        .state({
            name: 'home',
            url: '/',
            templateUrl: 'views/home.template.html',
          })
          .state({
              name: 'login',
              url: '/login',
              templateUrl: 'views/login.template.html',
              controller: 'LoginController',
              controllerAs: 'loginCtrl'
          })
          .state({
            name: 'about-us',
            url: '/about-us',
            templateUrl: 'views/about-us.template.html'
          })
          .state({
            name: 'all-guests',
            url: '/all-guests',
            templateUrl: 'views/all-guests.template.html'
          })
          .state({
            name: 'create-guest',
            url: '/create-guest',
            templateUrl: 'views/create-guest.template.html',
            controller: 'StaffController',
            controllerAs: 'staffCtrl'
          })
          .state({
            name: 'create-reservation',
            url: '/create-reservation',
            templateUrl: 'views/create-reservation.template.html'
          })
          .state ({
            name: 'not-found',
            url: '/not-found',
            templateUrl: 'views/not-found.template.html'
          })
          .state({
            name: 'reservations',
            url: '/reservations',
            templateUrl: 'views/reservations.template.html'
          })
          .state({
            name: 'upcoming-reservations',
            url: '/upcoming-reservations',
            templateUrl: '/views/upcoming-reservations.template.html'
          });
      }


}());
