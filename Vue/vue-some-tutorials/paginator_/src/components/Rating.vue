<template>
  <div class="rating">
    <span v-for="(item, index) in new Array(maxRating)" :key="index">
      <span v-if="index <= roundedRating - 1">
        <slot name="filled">
          <span class="green">*</span>
        </slot>
      </span>

      <span v-else-if="roundedRating - index == 0.5">
        <slot name="halfFilled">
          <span class="half">*</span>
        </slot>
      </span>

      <span v-else>
        <slot name="unfilled">
          <span class="black">*</span>
        </slot>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    ratingValue: { type: Number, required: true },
    maxRating: { type: Number, required: false, default: 5 }
  },
  setup(props) {
    const roundedRating = computed(() => Math.round(2 * props.ratingValue) / 2)

    return { roundedRating }
  }
})
</script>

<style lang="scss" scoped>
.rating {
  padding: 15px;
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