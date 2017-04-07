(function() {
  'use strict';

  angular.module('hotel')
    .factory('ReservationService', ReservationService);
      // console.log('Inside the service');

  ReservationService.$inject = ['$http', 'UserService'];

  function ReservationService($http, UserService) {

    function getReservations() {

      return $http({
        url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations',
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': UserService.getToken()
        }
      })
      .then(function handleResponse(response) {
          console.log(response.data);
          return response.data;
      });
    }

    return {
      getReservations: getReservations
    };

  }


}());
