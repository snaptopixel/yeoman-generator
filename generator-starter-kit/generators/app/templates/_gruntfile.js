// http://ericnish.io/blog/how-to-neatly-separate-grunt-files
module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        data: {
            config: {
                src: 'src',
                local: 'local',
                dist: 'dist'
            },
            pkg: grunt.file.readJSON('package.json')
        },
        jitGrunt: {
            customTasksDir: 'grunt/tasks',
            staticMappings: {

            }
        }
    });

};
