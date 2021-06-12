const yargs = require('yargs')
const notes = require('./notes.js')
// add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'title for your note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

// remove
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'title for the note you want to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// read
yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'title for your note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// list
yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: function(){
        notes.getNotes()
    }
})
yargs.parse()