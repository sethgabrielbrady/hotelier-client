(function() {
  'use strict';

  angular.module('hotel')
      .factory('ReservationService', ReservationService);

  function ReservationService() {

    function getReservation(id) {
      console.log('getting reservation by id:', id);
      return Promise.resolve({ id: id });
    }

    return {
      getReservation: getReservation
    };

  }

}());
