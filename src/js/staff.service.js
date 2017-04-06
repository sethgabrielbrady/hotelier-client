(function() {
    'use strict';

    angular.module('hotel')
        .factory('StaffService', StaffService);

    StaffService.$inject = ['$http', 'UserService'];

    function StaffService($http, UserService) {

        console.log('in the  staff service ', UserService.getToken());
        console.log(" cont guests is a ", typeof(guests));

        function addGuest(name, email, phone) {
            console.log('in addGuest in  STAFF service');


            let guests = {
                id: "",
                fullName: name,
                email: email,
                phone: phone,
            };
            guests = angular.toJson(guests);
            console.log('Json guests = ', guests);
            console.log('in STAFF', typeof(UserService.getToken()));
            // console.log('UnJson guests?? = ',angular.fromJson(guests));
            // console.log(guests); //this is working, sorta

            return $http({
                    //TODO: check

                    url: 'https://panda-hotelier-api.herokuapp.com/api/Guests',
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': UserService.getToken()
                    },
                    data: guests
                })
                .then(function handleResponse(response) {
                    console.log(response.data);
                    return response.data;

                });
        }


        return {
            addGuest: addGuest
        };

    } //staffservice


}());
