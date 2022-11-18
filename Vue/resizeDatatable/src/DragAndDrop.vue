<template>
  <div class="wrapper" @dragover.prevent @dragenter.prevent @drop="drop($event)">
    <div v-for="(box, boxIndex) in boxes" :key="box.id" class="box" @dragstart="dragstart($event, boxIndex)"
      @drop="drop($event, boxIndex)" draggable :id="boxIndex" @dragover="dragover($event, boxIndex)"
      :style="`transform: translateX(${box.dragTranslate}px)`">
      <span class="box-content">
        {{ box.id }}
        {{ box.dragTranslate }}px
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  components: {
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const dragging = ref({
      isDragging: false,
      boxIndex: null
    })
    const boxes = ref([
      { id: 1, dragTranslate: 0 },
      { id: 2, dragTranslate: 0 },
      { id: 3, dragTranslate: 0 },
      { id: 4, dragTranslate: 0 },
      { id: 5, dragTranslate: 0 }
    ])

    // eslint-disable-next-line no-unused-vars
    const dragstart = (e, boxIndex) => {
      dragging.value.isDragging = true
      dragging.value.boxIndex = boxIndex
    }
    // eslint-disable-next-line no-unused-vars
    const drop = (e, toBoxIndex) => {
      // eslint-disable-next-line no-unused-vars
      const { isDragging, boxIndex } = dragging.value

      if (boxIndex !== null && toBoxIndex !== null) {
        const to = toBoxIndex
        const from = boxIndex
        boxes.value.splice(to, 0, boxes.value.splice(from, 1)[0])
      }
      dragging.value.isDragging = false
      dragging.value.boxIndex = null

      boxes.value.forEach(box => box.dragTranslate = 0)
    }
    // eslint-disable-next-line no-unused-vars
    const dragover = (e, currentHoveredBox) => {
      if (!dragging.value.isDragging) {
        return
      }
      // eslint-disable-next-line no-unused-vars
      const { isDragging, boxIndex } = dragging.value

      const currentHoveredBox_ = currentHoveredBox
      if (currentHoveredBox_ > boxIndex) {
        boxes.value[currentHoveredBox_].dragTranslate = 55 //box width
        return
      }
      if (currentHoveredBox_ === boxIndex) {
        boxes.value[currentHoveredBox_].dragTranslate = 0
        return
      }
      boxes.value[currentHoveredBox_].dragTranslate = `-${55}`
    }

    return {
      boxes,
      dragstart,
      drop,
      dragover
    }
  }
}
//     transform: translateX(-12px);
</script>

<style >
.wrapper {
  justify-content: center;
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 100px;
  border: 1px solid red;
}

.box {
  display: block;
  margin: 15px;
  background-color: rgb(226, 211, 190);
  border: 2px solid rgb(241, 178, 178);
  border-radius: 5px;
  height: 55px;
  width: 55px;
  transition: .5s ease-in-out;
}

.box-content {
  height: 100%;
  padding: 0 22.5px;
  cursor: grab;
  display: block;
  cursor: grab;
}

span {
  -webkit-user-drag: element;
  user-select: none;
}

.content {
  border: 1px solid;
}
</style>