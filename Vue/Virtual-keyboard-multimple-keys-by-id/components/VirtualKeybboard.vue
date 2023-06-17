<template>
  <div class="simple-keyboard"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { emitter, currentActiveInput } from '../components/virtualEmitter'

import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  input: { type: String, required: false, default: '' },
  inputName: { type: String, required: false, default: '' }
})

const emits = defineEmits({
  // eslint-disable-next-line no-unused-vars
  onChange: (input) => true,
  // eslint-disable-next-line no-unused-vars
  onKeyPress: (button) => true
})

const keyboard = ref(null)

function handleShift() {
  const currentLayout = keyboard.value.options.layoutName
  const shiftToggle = currentLayout === 'default' ? 'shift' : 'default'

  keyboard.value.setOptions({
    layoutName: shiftToggle
  })
}

function onChange(input) {
  emitter.emit('onChangeVirtualKeyboard', { currentActiveInput: currentActiveInput.value, input })
  emits('onChange', input)
}

function onKeyPress(button) {
  emits('onKeyPress', button)
  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === '{shift}' || button === '{lock}') {
    handleShift()
  }
}

onMounted(() => {
  keyboard.value = new Keyboard({
    onChange,
    onKeyPress,
    inputName: props.inputName
  })
})
</script>
<style scoped></style>
