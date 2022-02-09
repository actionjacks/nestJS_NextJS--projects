<template>
  <h1>Render Item Detail</h1>
  <p>the item id is {{ $route.params.id }}</p>
  <p>this is from props {{ id }}</p>

  <div v-if="dummy">
    <h1>{{ dummy?.title }}</h1>
    <p>{{ dummy?.details }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

interface DummyData {
  title: string
  id: number
  details: string
}

export default defineComponent({
  props: {
    id: { require: true, type: String }
  },

  setup(props) {
    const dummy = ref<DummyData | null>(null)

    onMounted(async () => {
      const response: Response = await fetch(
        `http://localhost:3000/data/${props.id}`
      )
      const data: DummyData = await response.json()
      if (!response.ok) {
        const error: Error = new Error('something went wrong')
        throw error
      }
      dummy.value = data
    })

    return { dummy }
  }
})
</script>

<style scoped></style>
