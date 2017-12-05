const chalk = require('chalk');

module.exports.sayHeello = function() {
  //randomly generate a color
    console.log(chalk.hex(`#${(Math.random()*0xFFFFFF<<0).toString(16)}`)('Hello World!'));
};
