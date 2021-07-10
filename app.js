const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`My name is ${name}, and I am ${id} years old.`)
})
customEmitter.on('response', () => {
    console.log(`some other logic here `)
})

customEmitter.emit('response', 'Marjan', 39)