module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      application: {
        options: {
          style: 'compressed',
          loadPath: 'bower_components/foundation/scss'
        },
        files: {
          'assets/css/app.min.css': 'assets/src/app.scss'
        }
      }
    },
    uglify: {
      application: {
        files: {
          'assets/js/app.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/foundation/js/foundation.js', 'bower_components/prismjs/prism.js', 'assets/src/app.js']
        }
      }
    },
    copy: {
      prism: {
        files: [{
          expand: true,
          cwd: 'bower_components/prismjs/',
          src: ['*.css'],
          dest: 'assets/src/prismjs'
        }]
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      },
      deploy: {
        cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['sass', 'uglify', 'copy', 'exec:build']);
  grunt.registerTask('deploy', ['default', 'exec:deploy']);
  grunt.registerTask('serve', ['sass', 'uglify', 'exec:serve']);

};