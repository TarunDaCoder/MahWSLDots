const program = require('commander')

program.version('1.0.0').description('A CLI for a Password Generator')

program.command('generate').action(() => {
    console.log('generated')
}).parse()
