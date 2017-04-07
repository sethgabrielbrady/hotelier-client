(function() {
  'use strict';

  angular.module('hotel')
      .controller('ReservationController', ReservationController);

  ReservationController.$inject = ['$state', '$stateParams', 'ReservationService'];

  /**
   * The ReservationController
   * @param {Object} $state       Necessary so we can take the user to another state when entering a reservation ID
   * @param {Object} $stateParams The parameters... which might have an ID in it if we're on the single-res view
   * @return {void}
   */
  function ReservationController($state, $stateParams, ReservationService) {
    let vm = this;

    vm.reservationInfo = {};

    if ($stateParams.id) {
      ReservationService.getReservation($stateParams.id)
        .then(function showData(reservation) {
          vm.reservationInfo = reservation;
        })
        .catch(function handleBadAPIRequest(err) {
          console.warn(err);
          // TODO: what next?
        });
    }

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
