'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    copy: {
      html: {
        files: [
          { expand: true, cwd: 'src/', src: 'index.html', dest: 'build/' }
        ]
      },
      allImages: {
        files:[
          {
            cwd:'src/images',
            src:['*.jpg'],
            dest: 'build/images',
            expand: true
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [ 'copy' ]);
};
