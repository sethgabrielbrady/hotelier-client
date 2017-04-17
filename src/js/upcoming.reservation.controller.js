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
        vm.getReservations = ReservationService.getReservations()
          .then(function handleSuccess(data){
              vm.reservations = data;
              return data;
        });












    }










}());
