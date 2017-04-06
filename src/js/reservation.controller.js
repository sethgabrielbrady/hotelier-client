(function() {
  'use strict';

  angular.module('hotel')
      .controller('ReservationController', ReservationController);


  /**
   * The ReservationController
   */
  function ReservationController() {
    let vm = this;

    vm.reservationInfo = {};

    /**
     * Send the user to the single reservation view when they enter an ID
     * @param  {String}  id The ID of the reservation to send them to
     * @return {Boolean}    Whether or not we sent them
     */
    vm.findReservation = function findReservation(id) {
      console.log('Trying to find reservation:', id);
      vm.reservationInfo = {};
      return true;
    };
  }

}());
