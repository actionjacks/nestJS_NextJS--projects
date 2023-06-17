<script setup>
import VirtualKeyboard from '@/components/VirtualKeybboard.vue'
import { ref, onMounted } from 'vue'
import { emitter, currentActiveInput } from './components/virtualEmitter'

const inputId = ref('input-01')
const model = ref('')

function setFocus(inputId) {
  emitter.emit('setInput', inputId)
}

onMounted(() => {
  emitter.on('onChangeVirtualKeyboard', ({ currentActiveInput, input }) => {
    if (currentActiveInput === inputId.value) {
      model.value = input
    }
  })
})
</script>

<template>
  <div>
    <h1><span>curren active input ID</span> {{ currentActiveInput }}</h1>
    <h1>{{ model }}</h1>
    <input type="text" v-model="model" @focus="setFocus(inputId)" />
    <VirtualKeyboard />
  </div>
</template>

<style scoped></style>
