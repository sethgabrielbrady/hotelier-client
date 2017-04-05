(function() {
  'use strict';

  angular.module('hotel').controller('StaffController', StaffController);

  StaffController.$inject =['StaffService'];

  function StaffController(StaffService) {
    let vm = this;
    // vm.newGuest = {};
    vm.guest = {};

    vm.addGuest = function addGuest(guest) {
      StaffService.addGuest(guest.name, guest.email, guest.phonenumber);
    };

    console.log('in the controller', vm.newGuest);

  }



}());
