<template>
  <div class="rating">
    <span v-for="(item, index) in new Array(maxRating)" :key="index">
      <Let :val="{
        isFilled: index <= roundedRating - 1,
        halfFilled: roundedRating - index == 0.5
      }" v-slot="{ val: { isFilled, halfFilled } }">

        <slot name="ratingUnit" :isFilled="isFilled" :halfFilled="halfFilled">
          <span v-if="isFilled" class="green">*</span>
          <span v-else-if="halfFilled" class="half">*</span>
          <span v-else class="black">*</span>
        </slot>
      </Let>

    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Let from '@/components/Let.vue'

export default defineComponent({
  components: { Let },
  props: {
    ratingValue: { type: Number, required: true },
    maxRating: { type: Number, required: false, default: 5 }
  },
  setup(props) {
    const roundedRating = computed(() => Math.round(2 * props.ratingValue) / 2)

    return {
      roundedRating
    }
  }
})
</script>

<style lang="scss">
.rating {
  padding: 15px;
  color: rgb(226, 226, 226);
}

.green {
  background-color: rgb(25, 202, 25);
  font-size: 22px;
}

.half {
  background: rgb(73, 204, 24);
  background: linear-gradient(90deg, rgba(73, 204, 24, 1) 0%, rgba(20, 20, 22, 1) 50%);
  font-size: 22px;
}

.black {
  background-color: rgb(0, 0, 0);
  font-size: 22px;
}
</style>