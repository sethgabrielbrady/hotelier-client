'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        clean: ['build/'],

        jshint: {
            source: {
                options: {
                    jshintrc: '.jshintrc'
                },
                files: {
                    src: ['src/**/*.js']
                }
            }
        },

        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.html'],
                    dest: 'build/'
                }]
            },
            viewHtml: {
                files: [{
                    expand: true,
                    cwd: 'src/views/',
                    src: ['*.html'],
                    dest: 'build/views/'
                }]
            },
            javascript: {
                files: [{
                    expand: true,
                    cwd: 'src/js/',
                    src: ['*.js'],
                    dest: 'build/js'
                }]
            },
            allImages: {
                files: [{
                    cwd: 'src/images',
                    src: ['*.jpg'],
                    dest: 'build/images',
                    expand: true
                }]
            }
        },
        sass: {
            allSASS: {
                files: {
                    'build/style.css': 'src/sass/main.scss'
                }
            }
        },

        concat: {
            alljs: {
                options: {
                    sourceMap: true
                },
                src: ['src/js/hotel.module.js', 'src/js/**/*.js'],
                dest: 'build/js/app.js'
            }
        },


        karma: {
            all: {
                options: {
                    frameworks: ['mocha', 'chai', ],
                    browsers: ['Chrome'],
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/hotel.module.js',
                        'src/js/**/*.js',
                        'test/**/*.spec.js'
                    ],
                    singleRun: true,
                    preprocessors: {
                        'src/js/**/*.js': ['coverage']
                    },
                    reporters: ['dots', 'coverage'],
                    coverageReporter: {
                        type: 'text-summary'
                    }
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['clean', 'jshint', 'copy', 'sass']);
};
