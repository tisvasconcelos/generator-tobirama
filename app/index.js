'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var TobiramaGenerator = module.exports = function TobiramaGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: true });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(TobiramaGenerator, yeoman.generators.Base);

TobiramaGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'projectName',
      message: 'What do you want to call your project?'
    },
    {
      name: 'projectURL',
      message: 'Your project URL? (e.g.: http://localhost/)'
    },
    {
      name: 'dbHostname',
      message: 'Your database hostname? (e.g.: 127.0.0.1:3306)'
    },
    {
      name: 'dbUsername',
      message: 'Your database username? (e.g.: root)'
    },
    {
      name: 'dbPassword',
      message: 'Your database password? (e.g.: root)'
    },
    {
      name: 'dbDatabase',
      message: 'Your database name? (e.g.: database_name)'
    },
    {
      name: 'timeZone',
      message: 'Your time zone? (e.g.: America/Sao_Paulo)'
    }
  ];

  this.prompt(prompts, function (props) {
    this.projectName = (props.projectName != "") ? props.projectName : "Project Name";
    this.projectURL = (props.projectURL != "") ? props.projectURL : "http://localhost/";

    this.dbHostname = (props.dbHostname != "") ? props.dbHostname : '127.0.0.1:3306';
    this.dbUsername = (props.dbUsername != "") ? props.dbUsername : 'root';
    this.dbPassword = (props.dbPassword != "") ? props.dbPassword : 'root';
    this.dbDatabase = (props.dbDatabase != "") ? props.dbDatabase : 'database_name';

    this.timeZone = (props.timeZone != "") ? props.timeZone : 'America/Sao_Paulo';

    cb();
  }.bind(this));
};

TobiramaGenerator.prototype.app = function app() {
  this.directory('code-igniter/application', 'application');
  this.directory('code-igniter/system', 'system');
  this.directory('code-igniter/templates', 'templates');

  this.copy('_package.json', 'templates/package.json');

  this.template('code-igniter/index.php', 'index.php');

  this.copy('code-igniter/license.txt', 'license.txt');

  var configText
    = '[project]'
    + '\nname='+this.projectName
    + '\nurl='+this.projectURL
    + '\n[database]'
    + '\nhost='+this.dbHostname
    + '\ndb='+this.dbDatabase
    + '\nuser='+this.dbUsername
    + '\npass='+this.dbPassword;

  this.write('CONFIG.ini', configText);
};

/*
TobiramaGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
*/