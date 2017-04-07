(function() {
  'use strict';

  angular.module('hotel')
  .factory('ReservationService', ReservationService);
  ReservationService.$inject= ['$http', 'UserService'];

  function ReservationService($http, UserService) {
    // console.log('Inside the service');

    function createReservation(guest) {
      console.log('token in service');
      // if(newReservation.checkoutDate < newReservation.checkinDate){
      //   console.log('Checkout date can\'t be before checkin date!');
      //   return
      // }

      let reservation = {//may change this name
        checkinDate: guest.checkinDate,
        checkoutDate: guest.checkoutDate,
        numberOfGuests: guest.numberOfGuests,
        guestId: '58e6c8af633af30011bd0120',
        roomId: '58e297c33d5e770011657a85'
      };
      console.log(reservation);
      console.log('toJson');
      reservation = angular.toJson(reservation);
      console.log('token');

      return $http({
        method: 'POST',
        url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': UserService.getToken()
        },
        data: reservation
      })
      .then(function handleResponse(response){
        console.log(response.data);
        return response.data;
      });
    }
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
    function getGuestReservation(id){
      return $http({
        url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations/' + id,
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
      getReservations: getReservations,
      createReservation: createReservation,
      getGuestReservation: getGuestReservation
    };

  }


}());
