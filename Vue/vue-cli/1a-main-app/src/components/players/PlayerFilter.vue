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
  emits: ['change-filter'],
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
    setFilter(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;

      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
