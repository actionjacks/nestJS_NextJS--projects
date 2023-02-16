<template>
  <DynamicScroller :settings="SETTINGS">
    <template #default="{ data }">
      <div v-for="item in data" :key="item.index" class="item">
        <DynamicScrollerItem :text="item.text" />
      </div>
    </template>
  </DynamicScroller>
</template>

<script>
import DynamicScroller from "@/components/DynamicScroller.vue";
import DynamicScrollerItem from "@/components/DynamicScrollerItem.vue";

export default {
  name: "UseDynamicScroller",
  components: {
    DynamicScroller,
    DynamicScrollerItem,
  },
  data() {
    return {
      SETTINGS: {
        minIndex: 0,
        maxIndex: 999,
        startIndex: 0,
        itemHeight: 20,
        amount: 30,
        tolerance: 5,
      },
    };
  },
};
</script>

<style>
.item {
  height: 20px;
}
</style>
