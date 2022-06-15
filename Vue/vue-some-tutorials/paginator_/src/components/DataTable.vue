<template>
  <table v-if="items">
    <thead>
      <th>Name</th>
      <th>Stargazers</th>
      <th>Language</th>
      <th>Open Issuses</th>
      <th>Actions</th>
    </thead>
    <tfoot>
      <tr>
        <td>Totals</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>

    <tbody>
      <tr v-for="project in dataToDisplat" :key="project.id"
        :class="`${project.attributes.hightlighted ? 'hightlighted' : 'normal'}`">
        <td>{{ project.attributes.name }}</td>
        <td>{{ project.attributes.stargazers }}</td>
        <td>{{ project.attributes.language }}</td>
        <td>{{ project.attributes.issues }}</td>
        <td>
          <button @click="hightlighte(project.id)">HightLight</button>
          <button @click="remove(project.id)">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: ['items'],
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