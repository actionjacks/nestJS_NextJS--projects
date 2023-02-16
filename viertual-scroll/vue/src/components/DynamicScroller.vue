<template>
  <div
    ref="viewport"
    class="viewport"
    @scroll="runScroller"
    :style="{ height: `${virtualSettings?.viewportHeight}px` }"
  >
    <div :style="{ height: `${virtualSettings?.topPaddingHeight}px` }" />
    <slot name="default" v-bind="{ data: virtualSettings.data }" />
    <div :style="{ height: `${virtualSettings?.bottomPaddingHeight}px` }" />
  </div>
</template>

<script>
export default {
  name: "DynamicScroller",
  props: {
    settings: { type: Object, required: true },
  },
  emits: ["renderData"],
  data() {
    return {
      scrollTop: 0,
      virtuallScroll: this.setInitialState(this.settings),
    };
  },
  computed: {
    virtualSettings() {
      const { totalHeight, toleranceHeight, bufferedItems } =
        this.virtuallScroll;
      const { itemHeight, minIndex } = this.virtuallScroll.settings;

      const index =
        minIndex + Math.floor((this.scrollTop - toleranceHeight) / itemHeight);

      const data = this.getData(index, bufferedItems);

      const topPaddingHeight = Math.max((index - minIndex) * itemHeight, 0);

      const bottomPaddingHeight = Math.max(
        totalHeight - topPaddingHeight - data.length * itemHeight,
        0
      );

      return {
        ...this.virtuallScroll,
        topPaddingHeight,
        bottomPaddingHeight,
        data,
      };
    },
  },
  mounted() {
    this.$refs.viewport.scrollTop = 0;
  },
  methods: {
    getData(offset, limit) {
      const data = [];
      const start = Math.max(this.settings.minIndex, offset);
      const end = Math.min(offset + limit - 1, this.settings.maxIndex);
      if (start <= end) {
        for (let i = start; i <= end; i++) {
          data.push({ index: i, text: `item ${i}` });
        }
      }
      return data;
    },
    setInitialState(settings) {
      const { itemHeight, amount, tolerance, minIndex, maxIndex, startIndex } =
        settings;
      const viewportHeight = amount * itemHeight;
      const totalHeight = (maxIndex - minIndex + 1) * itemHeight;
      const toleranceHeight = tolerance * itemHeight;
      const bufferHeight = viewportHeight + 2 * toleranceHeight;
      const bufferedItems = amount + 2 * tolerance;
      const itemsAbove = startIndex - tolerance - minIndex;
      const topPaddingHeight = itemsAbove * itemHeight;
      const bottomPaddingHeight = totalHeight - topPaddingHeight;
      const initialPosition = topPaddingHeight + toleranceHeight;

      return {
        settings,
        viewportHeight,
        totalHeight,
        toleranceHeight,
        bufferHeight,
        bufferedItems,
        topPaddingHeight,
        bottomPaddingHeight,
        initialPosition,
        data: [],
      };
    },
    runScroller(event) {
      const { scrollTop } = event.target;
      this.scrollTop = scrollTop;
      // this.$nextTick().then(() => {
      //   this.scrollTop = scrollTop;
      // });
    },
  },
};
</script>

<style>
.viewport {
  width: 300px;
  overflow-y: auto;
  border: 1px solid gray;
}
</style>
