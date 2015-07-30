module.exports = {
    sass: {
        options: {
            livereload: false
        },
        files: '<%= config.local %>/scss/{,*/}*.{scss,sass}',
        tasks: ['sass:local', 'postcss:local']
    },
    js: {
        options: {
            livereload: false
        },
        files: '<%= config.src %>/{,*/}*.js',
        tasks: ['uglify:local']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= config.local %>{,*/}*'
        ]
    }
}
