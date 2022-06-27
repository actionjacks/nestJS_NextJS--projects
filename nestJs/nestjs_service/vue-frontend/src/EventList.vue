<template>
  <div class="grid grid-cols-12 max-w-4xl">
    <div class="col-span-3">
      <div class="sticky top-2">
        <div class="font-bold text-gray-700 uppercase mb-2">Time</div>
        <div class="text-lg">
          <Time label="All" :value="1" @clicked="time=1" :active="time"></Time>
          <Time label="Today" :value="2" @clicked="time=2" :active="time"></Time>
          <Time label="Tomorrow" :value="3" @clicked="time=3" :active="time"></Time>
          <Time label="This Week" :value="4" @clicked="time=4" :active="time"></Time>
          <Time label="Next Week" :value="5" @clicked="time=5" :active="time"></Time>
        </div>
      </div>
    </div>
    <div class="col-span-9">
      <div v-if="loading.indicator">
        <Loader class="mb-3 p-4" v-for="index in 10" :key="index"></Loader>
      </div>

      <div v-if="hasEvents && !loading.process">
        <EventOnList
          class="mb-3"
          v-for="event in (events.data || events)"
          :event="event"
          :key="event.id"
        ></EventOnList>
        <div class="mt-2 mb-6 mr-4 flex justify-end" v-if="hasEvents">
          <Pagination :page="page" route="event-list"></Pagination>
        </div>
      </div>

      <div v-if="!loading.process && !hasEvents">
        <RequestFailed></RequestFailed>
      </div>
    </div>
    <div class="col-span-3"></div>
  </div>
</template>

<script>
import EventOnList from "./components/EventOnList";
import Loader from "./components/Loader";
import { computed, ref } from "@vue/reactivity";
import api from "@/api";
import Time from "@/components/Time";
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import Pagination from "@/components/Pagination";
import RequestFailed from "@/components/RequestFailed";

export default {
  name: "EventList",
  components: { EventOnList, Loader, Time, Pagination, RequestFailed },
  setup() {
    const loading = ref({
      indicator: false,
      process: false
    });
    const events = ref(null);
    const time = ref(1);
    const route = useRoute();
    const page = computed(() => Number(route.query.page || 1));
    const hasEvents = computed(
      () =>
        (events.value && events.value.data && events.value.data.length > 0) ||
        (events.value && events.value.length > 0)
    );

    const fetchEvents = async () => {
      loading.value.process = true;
      const t = setTimeout(() => (loading.value.indicator = true), 1000);

      try {
        events.value = (
          await api.get(`/events?when=${time.value}&page=${page.value}`)
        ).data;
      } finally {
        clearTimeout(t);
        loading.value.process = false;
        loading.value.indicator = false;
      }
    };

    watch(time, (v, p) => (v !== p ? fetchEvents() : null));
    watch(page, (v, p) => (v !== p ? fetchEvents() : null));

    fetchEvents();

    return { loading, events, time, page, fetchEvents, hasEvents };
  }
};
</script>
