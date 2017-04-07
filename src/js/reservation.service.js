(function() {
  'use strict';

  angular.module('hotel')
      .factory('ReservationService', ReservationService);

  ReservationService.$inject = ['$http'];

  /**
   * The service for getting data from the API for Reservations
   * @param {Function} $http Angular's ajax method
   * @return {Object} The service's functions
   */
  function ReservationService($http) {

    /**
     * Get a single reservation from the API
     * @param  {String} id The id of the reservation to retrieve
     * @return {Promise}   This promise will resolve with the data from the server
     */
    function getReservation(id) {
      if (typeof(id) !== 'string' || !id.length) {
        return Promise.reject('Please provide a valid reservation ID');
      }

      return $http({
        url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations/' + id
      })
      .then(function handleResponse(response) {
        return response.data;
      });
    }

    return {
      getReservation: getReservation
    };

  }

}());
