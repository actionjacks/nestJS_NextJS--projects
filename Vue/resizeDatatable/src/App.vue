<template>
  <div class="container">
    <table id="firstTable">
      <thead>
        <tr>
          <th v-for="(column, columnIndex) in columnsData" :key="columnIndex" :style="applyWidth(column.width)"
            @mousemove="mousemove($event)" @mouseup="mouseup">
            {{ column.title }}
            <div class="resizer" @mousedown="mousedown($event, columnIndex)" @mousemove="mousemove($event)"
              @mouseup="mouseup" />
          </th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(table, tableIndex) in tableData" :key="tableIndex" @mouseup="mouseup">
          <td v-for="(row, rowIndex) in table.data" :key="rowIndex" @mouseup="mouseup">
            {{ row }}
          </td>
        </tr>
      </tbody>
    </table>
    {{ columnsData }}

    <DragAndDrop />
  </div>
</template>

<script>
import { ref } from 'vue';
import DragAndDrop from '@/DragAndDrop.vue'

export default {
  components: {
    DragAndDrop
  },
  setup() {
    const resizer = ref({
      resizing: false,
      startOffset: 0,
      endOffset: 0,
      currentColumnIndex: null
    })

    const applyWidth = (width) => `width:${Number(width)}px`

    const columnsData = ref([
      { title: 'columns1', width: 6 },
      { title: 'columns2', width: 8 },
      { title: 'columns3', width: 4 },
      { title: 'columns4', width: 2 },
      { title: 'columns5', width: 12 },
    ])

    const tableData = ref([
      { data: ["data-1", "data-2", "data-3", "data-4", "data-5"] },
      { data: ["data-1", "data-2", "data-3", "data-4", "data-5"] },
      { data: ["data-1", "data-2", "data-3", "data-4", "data-5"] },
      { data: ["data-1", "data-2", "data-3", "data-4", "data-5"] },
      { data: ["data-1", "data-2", "data-3", "data-4", "data-5"] },
    ])

    const mousedown = (e, columnIndex) => {
      resizer.value.resizing = true
      resizer.value.currentColumnIndex = columnIndex
      resizer.value.startOffset = columnsData.value[columnIndex].width - e.clientX
    }

    const mousemove = (e) => {
      if (!resizer.value.resizing) {
        return
      }
      resizer.value.endOffset = e.clientX
      const newWidth = resizer.value.startOffset + resizer.value.endOffset

      columnsData.value[resizer.value.currentColumnIndex].width = Math.sign(newWidth) === -1
        ? 0
        : newWidth
    }

    const mouseup = () => {
      resizer.value = {
        resizing: false,
        startOffset: 0,
        endOffset: 0,
        currentColumnIndex: null
      }
    }

    return {
      columnsData,
      tableData,
      mousedown,
      mousemove,
      mouseup,
      applyWidth
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 97vh;
  border: 1px solid;
}

table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid red;
  user-select: none;
  position: relative;
  border: 3px solid rgb(95, 94, 93);
  padding: 8px;
}

tbody th {
  background-color: #36c;
  color: #fff;
  text-align: left;
}

tbody tr:nth-child(even) th {
  background-color: #25c;
}

tbody tr:nth-child(even) {
  background-color: #eee;
}

tbody th {
  background-color: #36c;
  color: #fff;
  text-align: left;
}

.cell-highlight {
  background-color: gold;
  font-weight: bold;
}

tbody tr:nth-child(odd) {
  background-color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #eee;
}

thead {
  background-color: #333;
  color: white;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2%;
}

.resizer {
  position: absolute;
  top: 0;
  right: 0;
  background: rgb(224, 14, 14);
  opacity: 1;
  width: 3px;
  height: 100%;
  z-index: 99;
  cursor: col-resize;
}
</style>