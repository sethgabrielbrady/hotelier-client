(function() {
    'use strict';

    angular.module('hotel')
        .factory('StaffService', StaffService);

    StaffService.$inject = ['$http', 'UserService'];

    function StaffService($http, UserService) {
        function addGuest(name, email, phone) {

            let guests = {
                fullName: name,
                email: email,
                phone: phone
            };

            return $http({
                    url: 'https://panda-hotelier-api.herokuapp.com/api/Guests',
                    method: 'post',
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
