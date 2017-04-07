(function() {
    'use strict';

    angular.module('hotel').controller('StaffController', StaffController);

    StaffController.$inject = ['StaffService'];

    function StaffController(StaffService) {
        let vm = this;
        vm.guest = {};

        vm.addGuest = function addGuest(guest) {
            console.log('Controller guest obj', guest);
            StaffService.addGuest(guest.name, guest.email, guest.phone);

        };

        console.log('in the controller', vm.guest);




    }

}());
