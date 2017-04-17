(function() {
    'use strict';

    angular.module('hotel').controller('StaffController', StaffController);

    StaffController.$inject = ['StaffService'];

    function StaffController(StaffService) {
        let vm = this;
        vm.guest = {};

        vm.addGuest = function addGuest(guest) {
          //TODO
          //Need to do a check that if the name, email, and phone number are the
          //same, then do not allow that gues to be made.
            StaffService.addGuest(guest.name, guest.email, guest.phone);

        };

    }

}());
