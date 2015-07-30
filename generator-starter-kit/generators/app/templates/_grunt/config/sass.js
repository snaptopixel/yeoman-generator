module.exports = {
    local: {
        options: {
            style: 'nested',
            sourcemap: 'none'
        },
        files: {
            '<%= config.local %>/css/main.css': '<%= config.src %>/scss/main.scss'
        }
    },
    dist: {
        options: {
            style: 'compressed',
            sourcemap: 'none'
        },
        files: {
            '<%= config.dist %>/css/main.css': '<%= config.src %>/scss/main.scss'
        }
    }
}
