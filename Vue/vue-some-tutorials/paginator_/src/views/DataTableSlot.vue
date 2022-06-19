<template>
  <div>
    <h1>Table</h1>
    <DataTable :items="mockData.data" :columns="columns">

      <template #project="{ project, hightlighte, remove }">
        <td>{{ project.attributes.name }} @</td>
        <td>{{ project.attributes.stargazers }}</td>
        <td>{{ project.attributes.language }}</td>
        <td>{{ project.attributes.issues }}#</td>
        <td>
          <button @click="hightlighte(project.id)">HightLight</button>
          <button @click="remove(project.id)">Remove</button>
        </td>
      </template>

    </DataTable>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import DataTable from '@/components/DataTable.vue'
import Api from '@/api/service'

export default defineComponent({
  components: { DataTable },
  setup() {
    const mockData = ref<{ data: any }>({ data: [] })

    const columns = ref<any>([
      { id: 'name', propertyName: 'name', name: 'Name' },
      { id: 'stargazers', propertyName: 'stargazers', name: 'Stargazers' },
      { id: 'language', propertyName: 'language', name: 'Language' },
      { id: 'issues', propertyName: 'issues', name: 'Issues' },
      { id: 'actions', name: 'Actions' }
    ])

    onMounted(async () => {
      const response = await (await Api().get('/table')).data
      mockData.value = response
    })

    return {
      mockData,
      columns
    }
  }
})
</script>

<style scoped>
</style>