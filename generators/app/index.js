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
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }, {
        type: 'string',
        name: 'name',
        message: 'Enter your name:',
        default: 'John'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.log(props);
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt'), {
        someAnswer: this.props.someAnswer,
        name: this.props.name
      }
    );
  }
};