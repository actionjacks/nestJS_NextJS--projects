<template>
  <table v-if="items">
    <thead>
      <slot name="head">
        <th v-for="column in columns" :key="column.id">
          <slot :name="`head.${column.id}`">
            {{ column.name }}
          </slot>
        </th>
      </slot>
    </thead>

    <tbody>
      <tr v-for="project in dataToDisplat" :key="project.id"
        :class="`${project.attributes.hightlighted ? 'hightlighted' : 'normal'}`">
        <slot name="project" :project="project" :hightlighte="hightlighte" :remove="remove">

          <td v-for="column in columns" :key="column.id">
            <slot :name="`project.attributes.${column.id}`" :project="project" :hightlighte="hightlighte"
              :remove="remove">
              <span v-if="column.id === 'actions'">
                <button @click="hightlighte(project.id)">HightLight</button>
                <button @click="remove(project.id)">Remove</button>
              </span>
              <span v-else>
                {{ project[column.propertyName] }}
              </span>
            </slot>
          </td>

        </slot>
      </tr>
    </tbody>

    <tfoot>
      <tr v-for="project in dataToDisplat" :key="project.id">
        <slot name="foot" :project="project">
          <th v-for="column in columns" :key="column.id">
            <slot :name="`head.${column.id}`" :project="project" />
          </th>
        </slot>
      </tr>
    </tfoot>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<any>, required: true
    },
    columns: {
      type: Array as PropType<any>, required: true
    }
  },
  setup(props) {
    const dataToDisplat = computed({
      get: () => props.items,
      set: (newVal) => {
        console.log(newVal)
        return newVal
      }
    })

    function hightlighte(id: number) {
      dataToDisplat.value.forEach((item: any) => {
        if (item.id === id) {
          item.attributes.hightlighted = !item.attributes.hightlighted
        }
      })
    }

    function remove(id: number) {
      dataToDisplat.value.forEach((item: any, index: number) => {
        if (item.id === id) {
          dataToDisplat.value.splice(index, 1)
        }
      })
    }

    return {
      dataToDisplat,
      hightlighte,
      remove
    }
  }
})
</script>

<style lang="scss" scoped>
table {
  margin: auto;
  border-collapse: collapse;
}

.hightlighted {
  color: rgb(218, 151, 151);
}
</style>