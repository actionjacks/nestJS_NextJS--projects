<template>
  <div>
    <h1>Table</h1>
    <DataTable :items="mockData.data" />
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

    onMounted(async () => {
      const response = await (await Api().get('/table')).data
      mockData.value = response
    })

    return {
      mockData
    }
  }
})
</script>

<style scoped>
</style>