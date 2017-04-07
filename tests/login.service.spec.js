(function() {
    'use strict';

    let expect = chai.expect;

    describe('login service', function() {
        let LoginService;
        let $httpBackend;
        let mockLoginService = {};

        beforeEach(module('thoughter'));

        beforeEach(module(function($provide) {
            $provide.value('LoginService', mockLoginService);
        }));

        beforeEach(inject(function(_$httpBackend_, _LoginService_) {
            LoginService = _LoginService_;
            $httpBackend = _$httpBackend_;

            mockLoginService.getToken = function getToken() {
                return '';
            };

            $httpBackend
                .whenPOST('')
                .respond({
                    "content":"Some FAKE thought content",
                    "createTime":"2017-03-10T00:09:16.445Z",
                    "id":"58c1eeac7393340011446bfa",
                    "authorId":null
                });
        }));

        describe('addThought', function() {

            it('should fail if a string is not provided', function(doneCallback) {

                let returnValue = LoginService.Login(1234567);
                expect(returnValue.then).to.be.a('function');
                expect(returnValue.catch).to.be.a('function');

                returnValue
                    .then(function() {
                        doneCallback('we should not resolve with a bad argument');
                    })
                    .catch(function(err) {
                        // TODO: do assertions on the err object
                        console.info('did this catch?');
                        doneCallback();
                    });
            });

            it('should add a thought given a string of text', function(done) {

                let returnValue = LoginService.Login('testing thought add');
                // TODO: assert the returnValue is a promise

                returnValue
                    .then(function(data) {
                        expect(data).to.be.an('object');
                        expect(data.content).to.be.a('string');
                        expect(data.content).to.equal('Some FAKE thought content');
                        // TODO: add more assertions
                        done(); // this tells mocha we're "done" with async stuff
                    })
                    .catch(function(err) {
                        done(err);  // this tells mocha to FAIL this test
                    });

                // tell the FAKE server (backend) to release any held up responses
                $httpBackend.flush();
            });

        });

    });


})();
