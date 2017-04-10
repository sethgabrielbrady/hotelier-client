(function() {
  'use strict';

angular.module('hotel').controller('NavController', NavController);

NavController.$inject = ['$state', 'UserService'];

function NavController($state, UserService) {
  let vm = this;

  vm.logout = function logout() {
    UserService.logout();
    $state.go('home');
  };

  /**
   * Determines whether or not someone is logged in or not
   * @param {token}
   * @return {Boolean}
   */
  vm.isLoggedIn = function isLoggedIn() {
    // console.log('show login', UserService.getToken());
    return !!UserService.getToken();
  };
}
}());
