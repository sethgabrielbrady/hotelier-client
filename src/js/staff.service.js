(function() {
  'use strict';

  angular.module('hotel')
    .factory('StaffService', StaffService);

  StaffService.$inject = ['$http'];

  function StaffService($http) {

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
          'Authorization': LoginService.getToken()
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
