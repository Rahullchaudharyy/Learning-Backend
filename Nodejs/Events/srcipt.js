import EventEmitter from 'events'

const customEmitter = new EventEmitter();

customEmitter.once('response', (Name, id) => {
    console.log(`user:${Name} id:${id}`)
})



    customEmitter.emit('response', 'John', 15)
    customEmitter.emit('response', 'Rahul', 18)
    customEmitter.emit('response', 'Huxen', 35)



