(function() {
  'use strict';

      angular.module('hotel')
          .factory('ReservationService', ReservationService);
          ReservationService.$inject= ['$http', 'UserService'];

          function ReservationService($http, UserService) {
            // console.log('Inside the service');

            function createReservation(newReservation) {
              console.log('token in service');
              // if(newReservation.checkoutDate < newReservation.checkinDate){
              //   console.log('Checkout date can\'t be before checkin date!');
              //   return
              // }
              console.log('token in service');
                return $http({
                  method: 'POST',
                  url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': UserService.getToken()
                 },
                  data: newReservation
                }).then(function handleResponse(response){
                  console.log(response.data);
                  return response.data
                });
            }
            return {
              createReservation: createReservation
            };
          }

}());
