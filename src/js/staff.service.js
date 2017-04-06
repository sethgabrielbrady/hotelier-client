(function() {
  'use strict';

  angular.module('hotel')
    .factory('StaffService', StaffService);

  StaffService.$inject = ['$http', 'UserService'];

  function StaffService($http, UserService) {

    console.log('in the  staff service', UserService.getToken());

  /**
   * Add guest to
   */
  function addGuest(guest) {
      return $http({
        //TODO: check

        url: 'https://panda-hotelier-api.herokuapp.com/api/Guests',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': UserService.getToken()
        },
        data: {
          content: guest
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
