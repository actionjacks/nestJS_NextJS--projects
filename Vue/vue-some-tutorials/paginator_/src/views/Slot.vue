<template>
  <div>
    <div class="rating">
      <Rating :rating-value="3.3"></Rating>
      <Rating :rating-value="3.3" :max-rating="10"></Rating>

      <RatingProps :rating-value="2.5">
        <template v-slot="{ isFilled, halfFilled }">
          <span v-if="isFilled">
            <span class="green">*</span>
          </span>
          <span v-if="halfFilled">
            <span class="half">*</span>
          </span>
          <span v-else>
            <span class="black">*</span>
          </span>
        </template>
      </RatingProps>

      <Rating :rating-value="2.3">
        <template #filled>
          @
        </template>
        <template #halfFilled>
          @>
        </template>
        <template #unfilled>
          >
        </template>
      </Rating>
    </div>

    <Button>
      lol
    </Button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import Rating from '@/components/Rating.vue'
import RatingProps from '@/components/RatingProps.vue'

export default defineComponent({
  components: { Button, Rating, RatingProps },
  setup() {


    return {}
  }
})
</script>

<style scoped>
</style>
