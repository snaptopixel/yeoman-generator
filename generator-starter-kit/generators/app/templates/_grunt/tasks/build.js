module.exports = function(grunt) {
  grunt.registerTask('build', ['sass:dist', 'postcss', 'uglify:dist']);
};
