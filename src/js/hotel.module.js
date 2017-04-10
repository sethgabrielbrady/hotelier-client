(function() {
  'use strict';

  angular.module('hotel', ['ui.router'])
  .config(routerConfig)
  .run(setUpAuthorizationCheck);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $urlRouterProvider.otherwise('/not-found');

    $stateProvider
    .state({
      name: 'single-reservation',
      url: '/single-reservation',
      templateUrl: 'views/single-reservation.template.html',
      controller: 'GuestReservationController',
      controllerAs: 'guestResCtrl',
      params: { // dont forget
        id: null
      }
    })
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'views/home.template.html',
      controller: 'GuestReservationController',
      controllerAs: 'guestResCtrl'
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
      templateUrl: 'views/all-guests.template.html',
      requiresLoginToView: true,
      controller: 'ReservationController',
      controllerAs: 'resCtrl'

    })
    .state({
      name: 'create-guest',
      url: '/create-guest',
      templateUrl: 'views/create-guest.template.html',
      controller: 'StaffController',
      controllerAs: 'staffCtrl',
      requiresLoginToView: true
    })
    .state({
      name: 'create-reservation',
      url: '/create-reservation',
      templateUrl: 'views/create-reservation.template.html',
      controller: 'ReservationController',
      controllerAs: 'reservationCtrl',
      requiresLoginToView: true
    })
    .state({
      name: 'not-found',
      url: '/not-found',
      templateUrl: 'views/not-found.template.html'
    })
    // .state({
    //   name: 'reservations',
    //   url: '/reservations', //how you pass over the data that we need for reso page '/reservations/:id'
    //   templateUrl: 'views/reservations.template.html',
    //   requiresLoginToView: true,
    //   controller: 'ReservationController',
    //   controllerAs: 'resCtrl'
    // })

    .state({
      name: 'upcoming-reservations',
      url: '/upcoming-reservations',
      templateUrl: '/views/upcoming-reservations.template.html',
      controller: 'UpcomingReservationController',
      controllerAs: 'upcomingreservationCtrl',
      requiresLoginToView: true
    });
  }

  setUpAuthorizationCheck.$inject = ['$rootScope', '$state', 'UserService'];

  function setUpAuthorizationCheck($rootScope, $state, UserService) {

    $rootScope.$on('$stateChangeStart', function checkLoginStatus(eventObj, toState) {
      console.log('this is our token', UserService.getToken());
      if (toState.requiresLoginToView && !UserService.getToken()) {
        eventObj.preventDefault();
        $state.go('login');
      }

    });
  }


}());
