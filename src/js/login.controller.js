(function() {
    'use strict';

    angular.module('hotel')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['UserService', '$state'];

    /**
     * Creates a log in controller so application can have miltiple users
     * @param {Function} UserService this manages the users information
     */
    function LoginController(UserService, $state) {
        let vm = this;
        vm.newUser = {};
        vm.message = null;
        vm.users = UserService.getUsername();

        /**
         * Creates new user after logging in
         * @param {Object} user Information about user
         */
        vm.addUser = function addUser(user) {
            UserService.addUser(user).then(function handleResponse(success) {
                    $state.go('reservations');
                })
                .catch(function handleError(error) {
                    console.log(error);
                    if (error.status > 400 || error.status < 500) {
                        vm.message = 'Login failed, bad credentials, try again please';
                    } else {
                        vm.message = 'There is something wrong with our servers, please try again';
                    }
                });
            vm.newUser = {};
        };
        vm.logoutUser = function logoutUser() {
            UserService.logoutUser();
        };
        vm.removeUser = function removeUser(user) {
            UserService.removeUser(user);
        };

    }
}());
