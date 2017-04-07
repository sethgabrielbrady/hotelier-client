(function() {
  'use strict';

  angular.module('hotel')
  .controller('GuestReservationController', GuestReservationController);
  // console.log('Inside the controller');


  GuestReservationController.$inject = ['ReservationService', '$state'];

  /**
  * Creates a log in controller so application can have miltiple users
  * @param {Function} ReservationService this manages the reservation information
  */

  function GuestReservationController(ReservationService, $state){
    let vm = this;
    vm.id = null;
    vm.singleReservation = function(id){
      ReservationService.getGuestReservation(id).then(function handleSuccess(data){
        console.log('data', data);
        $state.go('reservations', {id: data});
      });
    };
  }





}());
