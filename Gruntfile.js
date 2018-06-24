module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'build/js/main.min.js': ['src/js/main.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/main.min.css' : 'src/scss/main.scss'
        }
      }
    },
    uncss: {
      dist: {
          files: {
              'build/css/main.min.css': ['build/index.html']
          }
      }
  },
    watch: {
      script: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'uglify']
      },
      scss:{
        files: ['src/**/*.scss', 'build/css/main.min.css'],
        tasks: ['sass']
      },
      uncss: {
        files: ['build/css/main.min.css'],
        tasks: ['uncss']
      }  
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'uncss']);
};