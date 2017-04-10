(function() {
  'use strict';

  angular.module('hotel')
  .controller('ReservationController', ReservationController);

  // console.log('Inside the controller');

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
    vm.message = null;
    vm.guest = {};
    console.log(ReservationService);//listing the FN rom res service

    if ($stateParams.id) {
      ReservationService.getReservations($stateParams.id)
        .then(function showData(reservationInfo) {
          console.log('retrieved reservation data:', reservationInfo);//this is working
          vm.reservationInfo = reservationInfo;
          console.log(vm.reservationInfo);

        })
        .catch(function handleBadAPIRequest(err) {
          console.warn(err);
          vm.message = 'Sorry, but there was a problem retrieving that reservation.';
        });
    }
    vm.createReservation = function(newReservation) {
      console.log('token', localStorage.getItem('token'));
      let token =  localStorage.getItem('token');
      ReservationService.createReservation(newReservation, token);
    };
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
