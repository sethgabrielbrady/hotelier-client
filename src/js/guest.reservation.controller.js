(function() {
    'use strict';

    angular.module('hotel')
        .controller('GuestReservationController', GuestReservationController);
    // console.log('Inside the controller');


    GuestReservationController.$inject = ['$state', '$stateParams', 'ReservationService'];

    /**
     * Creates a log in controller so application can have miltiple users
     * @param {Function} ReservationService this manages the reservation information
     */

    function GuestReservationController($state, $stateParams, ReservationService) {

        let vm = this;
        vm.reservationId = {};
        vm.reservationInfo = null;

        vm.id = null;
        vm.singleReservation = function(id) {
            ReservationService.getGuestReservation(id).then(function handleSuccess(data) {
                console.log(' guest reservation data', data);
                $state.go('single-reservation', {
                    id: data
                });
            });
        };

        if ($stateParams.id) {
            console.log($stateParams);
            // console.log("Inside guest reservation");
            vm.reservationInfo = $stateParams.id;
            console.log(vm.reservationInfo);

        }


    }





}());
