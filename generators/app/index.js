'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `yO!`
      )
    );

    const prompts = [
      {
        type: 'string',
        name: 'packageName',
        message: 'Package name',
        default: 'net.nineseventwo'
      }, {
        type: 'string',
        name: 'serviceName',
        message: 'Service name',
        default: 'sandbox'
      }, {
        type: 'string',
        name: 'serviceVersion',
        message: 'Service version',
        default: '1.0.0'
      }, {
        type: 'list',
        name: 'javaVersion',
        message: 'Java version',
        choices: [
          {
            name: 'Java 8',
            value: '1.8',
          }, {
            name: 'Java 9',
            value: '1.9'
          }
        ]
      }, {
        type: 'list',
        name: 'springBootVersion',
        message: 'Spring Boot version:',
        choices: [
          {
            name: '1.5.18.RELEASE',
            value: '1.5.18.RELEASE'
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      this.log(props);
      this.props = props;
    });
  }

  writing() {
    var packageTplPath = 'net/nineseventwo/template'
    var packagePath = this.props.packageName.replace(/\./g, '/') + '/' + this.props.serviceName;
    var gradleWrapperPath = 'gradle/wrapper'
    var srcMainJavaPath = 'src/main/java'
    var srcMainResourcesPath = 'src/main/resources'
    var srcMainTestPath = 'src/test/java'

    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));

    this.fs.copyTpl(
      this.templatePath('build.gradle'),
      this.destinationPath('build.gradle'), {
        packageName: this.props.packageName,
        serviceName: this.props.serviceName,
        serviceVersion: this.props.serviceVersion,
        javaVersion: this.props.javaVersion
      });

    this.fs.copyTpl(
      this.templatePath('settings.gradle'),
      this.destinationPath('settings.gradle'), {
        packageName: this.props.packageName,
        serviceName: this.props.serviceName,
        serviceVersion: this.props.serviceVersion,
        javaVersion: this.props.javaVersion
      });

    this.fs.copy(this.templatePath('gradlew'), this.destinationPath('gradlew'), this);
    this.fs.copy(this.templatePath('gradlew.bat'), this.destinationPath('gradlew.bat'), this);
    this.fs.copy(this.templatePath(gradleWrapperPath + '/gradle-wrapper.jar'), this.destinationPath(gradleWrapperPath + '/gradle-wrapper.jar'), this);
    this.fs.copy(this.templatePath(gradleWrapperPath + '/gradle-wrapper.properties'), this.destinationPath(gradleWrapperPath + '/gradle-wrapper.properties'), this);


    this.fs.copyTpl(
      this.templatePath(srcMainJavaPath + '/' + packageTplPath + '/DemoApplication.java'),
      this.destinationPath(srcMainJavaPath + '/' + packagePath + '/DemoApplication.java'), {
        packageName: this.props.packageName,
        serviceName: this.props.serviceName
      });
    this.fs.copy(this.templatePath(srcMainResourcesPath + '/application.yaml'), this.destinationPath(srcMainResourcesPath + '/application.yaml'), this);
    this.fs.copyTpl(
      this.templatePath(srcMainTestPath + '/' + packageTplPath + '/DemoApplicationTests.java'),
      this.destinationPath(srcMainTestPath + '/' + packagePath + '/DemoApplicationTests.java'), {
        packageName: this.props.packageName,
        serviceName: this.props.serviceName
      });
  }

};