<template>
  <base-card>
    <h2>Find ur Player</h2>
    <span class="filter-option">
      <input type="checkbox" id="dota" checked @change="setFilter" />
      <label for="dota">dota</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="lol" checked @change="setFilter" />
      <label for="lol">lol</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="SC2" checked @change="setFilter" />
      <label for="SC2">SC2</label>
    </span>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        dota: true,
        lol: true,
        SC2: true,
      },
    };
  },
  methods: {
    setFilter() {},
  },
};
</script>

<style scoped></style>
