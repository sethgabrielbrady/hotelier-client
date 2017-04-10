(function() {
    'use strict';

    angular.module('hotel')
        .factory('StaffService', StaffService);

    StaffService.$inject = ['$http', 'UserService'];

    function StaffService($http, UserService) {
        function addGuest(name, email, phone) {

            let guests = {
                id: "",
                fullName: name,
                email: email,
                phone: phone,
            };
            guests = angular.toJson(guests);

            return $http({
                    url: 'https://panda-hotelier-api.herokuapp.com/api/Guests',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': UserService.getToken()
                    },
                    data: guests
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
