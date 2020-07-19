const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// customize yargs version
yargs.version('1.1.0')

//create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe:'Title for a note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'body of the node',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        console.log('Title: ' + argv['title'] + "\nBody:" + argv['body'])
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing a new note!')
    }
})

yargs.command({
    command: 'read',
    describe: 'reading notes',
    handler: () => {
        console.log('Reading a new note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'lising notes',
    handler: () => {
        console.log('Listing notes!')
    }
})


yargs.parse()


//add remove read list

// const value = notes()
// console.log(value)


// console.log(chalk.red.inverse.bold('Error!'))

// console.log(process.argv[2])

// const validator = require('validator')

// console.log(validator.isEmail('ktandon@gmail.com'))
// console.log(validator.isURL('https://karantandon.com'))

// add = require('./utils.js')
// const sum = add(5,3)
// console.log(sum)