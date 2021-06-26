<template>
  <div class="bg-white mr-4 p-4 text-sm rounded-sm border border-indigo-200">
    <div class="font-semibold text-xl">
      <router-link :to="{name: 'event', params: {id: event.id}}">{{ event.name }}</router-link>
    </div>
    <div class="flex items-center">
      <div class="h-4 w-4 mr-1">
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div class="text-lg">{{ event.when }}</div>
    </div>
    <EventAddress :address="event.address"></EventAddress>
    <div class="text-gray-500 flex items-center" v-if="event.attendeeCount">
      <div class="h-4 w-4 mr-1">
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div>{{ event.attendeeCount }} people</div>
    </div>
    <div v-if="event.description">
      <div class="border-b mt-4 mb-4"></div>
      <div class="text-gray-500">{{ event.description }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import EventAddress from "@/components/EventAddress";

export default {
  name: "EventOnList",
  props: ["event"],
  components: {
    EventAddress
  }
};
</script>
