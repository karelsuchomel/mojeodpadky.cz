module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      options: {livereload: true},
      watchSASS: {
        files: ['sass/**/*.sass'],
        tasks: ['sass'],
      },
      watchJADE: {
        files: ['jade/*.jade'],
        tasks: ['jade'],
      },
    },
    sass: {
      dist: {                                           // Target
        options: {                                      // Target options
          style: 'compressed',                          // options: nested, compact, compressed, expanded
          sourcemap: 'none',                            // options: auto, file, inline, none
        },
        files: {                                        // Dictionary of files
          'build/css/main.css': 'sass/import.sass',     // 'destination': 'source'
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'build/index.html': ['jade/index.jade'], // 'destination': 'source'
        }
      }
    },
    express: {
      all: {
        options: {
          port: 8080,
          hostname: 'localhost',
          bases: ['build/'],
          livereload: true,
        }
      }
    },
    'ftp-deploy': {
      build: {
        auth: {
          host: 'ftp.simpledot.cz',
          port: 21,
          authKey: 'key1'
        },
        src: 'build/',
        dest: '/mojeodpadky/',
        exclusions: ['/.sass-cache/**/*']
      }
    }
  });

  //looks for your grunt.initConfig object
  // // concat
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  // compile Sass to CSS
  grunt.loadNpmTasks('grunt-contrib-sass');
  // compile Jade to html
  grunt.loadNpmTasks('grunt-contrib-jade');
  // reload web browser
  grunt.loadNpmTasks('grunt-express');
  // deploy over FTP
  grunt.loadNpmTasks('grunt-ftp-deploy');
  // set default
  grunt.registerTask('default', ['sass', 'jade', 'express', 'watch']);
  grunt.registerTask('ftp', 'ftp-deploy');

};
