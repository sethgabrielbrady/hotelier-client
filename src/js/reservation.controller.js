(function() {
  'use strict';

  angular.module('hotel')
      .controller('ReservationController', ReservationController);

  ReservationController.$inject = ['$state'];

  /**
   * The ReservationController
   * @param {Object} $state Necessary so we can take the user to another state when entering a reservation ID
   * @return {void}
   */
  function ReservationController($state) {
    let vm = this;

    vm.reservationInfo = {};

    /**
     * Send the user to the single reservation view when they enter an ID
     * @param  {String}  id The ID of the reservation to send them to
     */
    vm.findReservation = function findReservation(id) {
      if (typeof(id) !== 'string' || !id.length) {
        return;
      }

      $state.go('single-reservation', { id: id });
    };
  }

}());
