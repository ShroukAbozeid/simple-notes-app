const chalk = require('chalk')

const fs = require('fs')
const getNotes =() =>{
    const myNotes = loadNotes();
    console.log(chalk.inverse('Your notes ..'))
    myNotes.forEach(element => {
        console.log(chalk.yellow(element.title))
    });
}

const addNote =(title, body) => {
    const notes = loadNotes();
    const duplicatedNotes = notes.find((note) => note.title === title)
    if (!duplicatedNotes) {
        notes.push({title: title, body: body})
    saveNotes(notes)
    } else  {
        console.log('title taken!')
    }
}

const removeNote =(title) => {
    const notes = loadNotes();
    newnotes = notes.filter((note) => note.title != title)
    if (newnotes.length === notes.length) {
console.log(chalk.red.inverse('Note not found!'))
    } else {
    saveNotes(newnotes)
    console.log(chalk.green.inverse('Note removed'))
    }
}

const loadNotes =() => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson)
  } catch(e) {
    return []
  }
}

const saveNotes =(notes) =>{
    fs.writeFileSync('notes.json', JSON.stringify(notes))
   
  }

const readNote = (title) => {
    debugger
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse('Your note'))
        console.log('title: ' + note.title)
        console.log('body: ' + note.body )
    } else  {
        console.log(chalk.red.inverse('note not found!'))
    }
} 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}