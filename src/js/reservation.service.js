(function() {
  'use strict';
  angular.module('hotel')
  .factory('ReservationService', ReservationService);
  ReservationService.$inject = ['$http', 'UserService'];

  /**
  * The service for getting data from the API for Reservations
  * @param {Function} $http Angular's ajax method
  * @return {Object} The service's functions
  */

  function ReservationService($http, UserService) {

    function createReservation(guest) {

      let reservation = {
        checkinDate: guest.checkinDate,
        checkoutDate: guest.checkoutDate,
        numberOfGuests: guest.numberOfGuests,
        guestId: guest.guestId,
        roomId: guest.roomId
      };

      reservation = angular.toJson(reservation);

      return $http({
        method: 'POST',
        url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': UserService.getToken()
        },
        data: reservation
      })
      .then(function handleResponse(response) {
        return response.data;
      });
    }


    function getReservations() {
      return $http({
        url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations/',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': UserService.getToken()
        }
      })
      .then(function handleResponse(response) {
        return response.data;
      });
    }

    /**
    * Get a single reservation from the API
    * @param  {String} id The id of the reservation to retrieve
    * @return {Promise}   This promise will resolve with the data from the server
    */
    function getGuestReservation(id) {
      if (typeof(id) !== 'string' || !id.length) {
        return Promise.reject('Please provide a valid reservation ID');
      }

      return $http({
        url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations/' + id,
      })
      .then(function handleResponse(response) {
        return response.data;
      });

    }


    return {
      getReservations: getReservations,
      createReservation: createReservation,
      getGuestReservation: getGuestReservation
    };

  }

}());
