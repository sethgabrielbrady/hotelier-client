(function() {
    'use strict';

    angular.module('hotel').factory('UserService', UserService);
    UserService.$inject = ['$http'];

    /**
     * Creates the service model for usernames
     */
    function UserService($http) {

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let token = JSON.parse(localStorage.getItem('token'));

        function getToken() {
            // console.log('getting the token from the func in log serv', token);
            return token;
        }

        function logout() {
            token = null;
            localStorage.removeItem('token');
            //TODO: send an API call to the server to logout
            //      but we have to tell the server who we are
            //      by sending the token in the authorization header
        }

        /**
         * Gathers all of the users information
         * @return {Array} Array containing details of user
         */
        function getUsername() {
            return users;
        }

        /**
         * Adds a new user when they log in
         * @param {Object} user User information containing username & timestamp
         */
        function login(user) { //probably should be named login, and in return and in the controller, html
            if (typeof(user) !== 'object') {
                return console.log('not an object');
            }
            if (!user.username) {
                return console.log('no username has been entered');
            }
            users.push({
                username: user.username,
                password: user.password,
            });
            return $http({
                url: 'https://panda-hotelier-api.herokuapp.com/api/Staffs/login',
                method: 'post',
                data: {
                    'email': user.username,
                    'password': user.password
                }

            }).then(function handleResponse(response) {
                // console.log(response.status);
                // console.log(response.data);
                localStorage.setItem('token', angular.toJson(response.data.id));
                token = response.data.id;
                return 'success';
            });
        }

        /**
         * Deletes the most recent user entry
         * @param  {Object} user The user that will be deleted
         * @return {void}
         */
        function removeUser(user) {
            let index = users.indexOf(user);
            users.splice(index, 1);
        }

        function logoutUser() {
            localStorage.removeItem('token');
        }

        return {
            getUsername: getUsername,
            login: login,
            removeUser: removeUser,
            logoutUser: logoutUser,
            getToken: getToken,
            logout: logout
        };
    }
}());
