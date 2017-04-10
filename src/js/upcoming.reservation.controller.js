(function() {
    'use strict';

    angular.module('hotel')
        .controller('UpcomingReservationController', UpcomingReservationController);
    // console.log('Inside the controller');


    UpcomingReservationController.$inject = ['ReservationService', '$state'];

    /**
     * Creates a log in controller so application can have miltiple users
     * @param {Function} ReservationService this manages the reservation information
     */

    function UpcomingReservationController(ReservationService) {
        let vm = this;
        vm.reservations = null;
        vm.getReservations = ReservationService.getReservations().then(function handleSuccess(data) {
            console.log('im in this function');
            console.log(data);
            vm.reservations = data;
            //had to set vm reservations to data so that angular digest cycle catches this
            //will run into more of this when we do more async stuff
            return data;
        });
        console.log(ReservationService);
    }





}());
