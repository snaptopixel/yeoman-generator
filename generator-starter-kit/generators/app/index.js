'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var StarterKit = yeoman.generators.Base.extend({
    promptUser: function() {
        var done = this.async();
        var prompts = [{
            name: 'appName',
            message: 'What is your app\'s name ?'
        }];
        this.prompt(prompts, function(props) {
            this.appName = props.appName;
            done();
        }.bind(this));
    },
    scaffoldFolders: function() {
        this.mkdir("src");
        this.mkdir("src/scss");
        this.mkdir("src/js");
        this.mkdir("dist");
        this.mkdir("local");
        this.mkdir("grunt");
    },
    copyMainFiles: function() {

        this.copy("_gruntfile.js", "Gruntfile.js");
        this.copy("_main.scss", "src/scss/main.scss");
        this.copy("_gitignore", ".gitignore");

        this.directory("_grunt","grunt");

        var templateVars = {
            app_name: this.appName
        }

        this.template("_package.json", "package.json", templateVars );
        this.template("_bower.json", "bower.json", templateVars );
        this.template("_index.html", "src/index.html", templateVars );
    },
});
module.exports = StarterKit;
