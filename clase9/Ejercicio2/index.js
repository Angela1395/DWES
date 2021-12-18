const chalk = require('chalk');

module.exports.printBlue = function () {
    for (let i = 1; i < process.argv.length; i++) {
        process.stdout.write(chalk.blue(process.argv[i] + ' '));
    }
}

module.exports.printRed = function () {
    for (let i = 1; i < process.argv.length; i++) {
        process.stdout.write(chalk.red(process.argv[i] + ' '));
    }
}

module.exports.printGreen = function () {
    for (let i = 1; i < process.argv.length; i++) {
        process.stdout.write(chalk.green(process.argv[i] + ' '));
    }
}