(function() {
  'use strict';

  angular.module('hotel').controller('NavController', NavController);

NavController.$inject = ['UserService'];

function NavController(UserService) {
  let vm = this;

  vm.logout = function logout() {
    UserService.logout();
  };

  /**
   * Determines whether or not someone is logged in or not
   * @param {token}
   * @return {Boolean}
   */
  function isLoggedIn() {
    return !!UserService.getToken();
  }
}
}());
