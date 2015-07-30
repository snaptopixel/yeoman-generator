module.exports = function(grunt) {
  grunt.registerTask('default', ['sass:dev', 'postcss', 'connect', 'watch']);
};
