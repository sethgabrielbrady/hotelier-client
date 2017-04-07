(function() {
  'use strict';

  angular.module('hotel')
  .controller('ReservationController', ReservationController);
  // console.log('Inside the controller');


  ReservationController.$inject = ['ReservationService', '$state'];

  /**
  * Creates a log in controller so application can have miltiple users
  * @param {Function} ReservationService this manages the reservation information
  */

  function ReservationController(ReservationService){
    let vm = this;
    vm.guest = {};
    console.log(ReservationService);
    vm.createReservation = function(newReservation) {
      console.log('token', localStorage.getItem('token'));
      let token =  localStorage.getItem('token');
      ReservationService.createReservation(newReservation, token);
    };

  }





}());
