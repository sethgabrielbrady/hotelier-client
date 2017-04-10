(function() {
    'use strict';

    angular.module('hotel').controller('StaffController', StaffController);

    StaffController.$inject = ['StaffService'];

    function StaffController(StaffService) {
        let vm = this;
        vm.guest = {};

        vm.addGuest = function addGuest(guest) {
            StaffService.addGuest(guest.name, guest.email, guest.phone);

        };

    }

}());
