import mitt from 'mitt'
import { ref } from 'vue'

export const currentActiveInput = ref(null)
export const emitter = mitt()

emitter.on('setInput', (inputId) => {
  console.log(inputId, 'setInput')
  currentActiveInput.value = inputId
})

// // listen to all events
// emitter.on('*', (type, e) => console.log(type, e))

// // fire an event
// emitter.emit('foo', { a: 'b' })

// // clearing all events
// emitter.all.clear()

// // working with handler references:
// function onFoo() {}
// emitter.on('foo', onFoo) // listen
// emitter.off('foo', onFoo) // unlisten
