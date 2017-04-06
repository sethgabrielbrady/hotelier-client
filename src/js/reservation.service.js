(function() {
  'use strict';

      angular.module('hotel')
          .factory('ReservationService', ReservationService);
          ReservationService.$inject= ['$http'];

          function ReservationService($http) {
            // console.log('Inside the service');

            function createReservation(newReservation, token) {
              console.log('token in service', token);
              // if(newReservation.checkoutDate < newReservation.checkinDate){
              //   console.log('Checkout date can\'t be before checkin date!');
              //   return
              // }
              console.log('token in service', token);
                $http({
                  method: 'POST',
                  url: 'https://panda-hotelier-api.herokuapp.com/api/Reservations',
                  headers: {
                     Authorization: token
                 },
                  data: newReservation
                }).then(function(data){
                  console.log(data)
                })
            }
            return {
              createReservation: createReservation
            };
          }

}());
