module.exports = {
    options: {
        map: false,
        processors: [
            require('autoprefixer-core')({
                browsers: ['last 2 versions', 'ie 9']
            })
        ]
    },
    local: {
        src: '<%= config.local %>/*.css'
    },
    dist: {
        src: '<%= config.dist %>/*.css'
    }
}
