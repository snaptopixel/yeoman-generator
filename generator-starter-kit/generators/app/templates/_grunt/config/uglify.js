var scripts = [
    // Scripts in order here
];

module.exports = {
    local: {
        options: {
            beautify: true,
            compress: false
        },
        files: {
            '<%= config.local %>/js/scripts.js': scripts
        }
    },
    dist: {
        files: {
            '<%= config.dist %>/js/scripts.js': scripts
        }
    }
}
