(function() {
  'use strict';

  angular.module('hotel')
    .factory('StaffService', StaffService);

  StaffService.$inject = ['$http', 'UserService'];

  function StaffService($http, UserService) {

    let guests = JSON.parse(localStorage.getItem('guests')) || [];

    console.log('in the  staff service', UserService.getToken());

  /**
   * Add guest to
   */
  function addGuest(guest) {


    guests.push({
      id: "",
      fullname: guest.name,
      email: guest.email,
      phone: guest.phone,
      reservation:[]
    });
    localStorage.setItem('guests', angular.toJson(guests));

    console.log(guests);//this is working, sorta


      return $http({
        //TODO: check

        url: 'https://panda-hotelier-api.herokuapp.com/api/Guests',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': UserService.getToken()
        },
        data: {
          "id":guess.id,
          'fullname': guest.name,
          'email': guest.email,
          'phone':guest.phonenumber,
        }

      })
      .then(function handleResponse(response) {
        return response.data;
      });
  }

  return {
    addGuest: addGuest
  };

  }
}());
