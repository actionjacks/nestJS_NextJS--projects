<template>
  <nav class="inline-flex text-xs font-semibold -space-x-px">
    <router-link
      :to="{ name: route, query: {[pageParameter]: Math.max(1, page - 1), ...otherParameters}}"
      class="bg-white px-2 py-2 border border-indigo-200 text-gray-700 hover:bg-gray-50 rounded-l-sm flex justify-center"
      :class="{'w-10': prevLabel.length === 0}"
    >
      <div class="h-4 w-4" :class="{'mr-2': prevLabel.length !== 0}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </div>
      {{ prevLabel }}
    </router-link>

    <div v-if="showPages" class="flex -space-x-px">
      <router-link
        v-for="p in [...Array(pages).keys()].map(e => e + page)"
        :key="p"
        :to="{ name: route, query: {[pageParameter]: p, ...otherParameters}}"
        class="flex bg-white justify-center items-center justify-items-center w-10 border border-indigo-200 text-gray-700 hover:bg-gray-50"
      >{{ p }}</router-link>
    </div>

    <router-link
      :to="{ name: route, query: {[pageParameter]: page + 1, ...otherParameters}}"
      class="flex bg-white px-2 py-2 border border-indigo-200 text-gray-700 hover:bg-gray-50 rounded-r-sm justify-center"
      :class="{'w-10': nextLabel.length === 0}"
    >
      {{ nextLabel }}
      <div class="h-4 w-4" :class="{'ml-2': nextLabel.length !== 0}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    page: {
      type: Number
    },
    pages: {
      type: Number,
      default: 10
    },
    showPages: {
      type: Boolean,
      default: false
    },
    route: {
      type: String
    },
    pageParameter: {
      type: String,
      default: "page"
    },
    otherParameters: {
      type: Object,
      default: () => ({})
    },
    nextLabel: {
      type: String,
      default: ""
    },
    prevLabel: {
      type: String,
      default: ""
    }
  }
};
</script>
