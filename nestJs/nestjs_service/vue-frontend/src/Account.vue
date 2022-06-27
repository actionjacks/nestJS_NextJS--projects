<template>
  <div>
    <Breadcrumbs :links="links"></Breadcrumbs>

    <h1 class="text-2xl text-gray-700 mr-4">Events you attend</h1>
    <div class="border-b border-gray-300 mt-4 mb-4 mr-4"></div>

    <div class="grid grid-cols-12" v-if="false === loading.attendedEvents && null !== attendedEvents && attendedEvents.length > 0">
      <div class="col-span-4 mb-3" v-for="event in attendedEventsWithoutDesc" :key="event.id">
        <EventOnList :event="event" class="h-full">
          <div class="border-b mt-4 mb-4"></div>
          <AttendanceButtons :event-id="event.id"></AttendanceButtons>
        </EventOnList>
      </div>
      <div class="col-span-12">
        <Pagination :page="1" route="account" page-parameter="attendedPage" :other-parameters="{organizedPage}"
                    next-label="Next" prev-label="Previous"></Pagination>
      </div>
    </div>

    <div class="grid grid-cols-12" v-if="true === loading.attendedEvents || null === loading.attendedEvents">
      <div class="col-span-4" v-for="index in 3" :key="index">
        <Loader class="mb-3 p-4 mr-4"></Loader>
      </div>
    </div>

    <RequestFailed v-if="false === loading.attendedEvents && null === attendedEvents"></RequestFailed>

    <div class="flex justify-between items-center mt-6 mr-4">
      <h1 class="text-2xl text-gray-700">Events you organize</h1>
      <div>
        <router-link :to="{name: 'account-create-event'}"
                     class="bg-indigo-600 hover:bg-indigo-500 outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white border-transparent py-2 px-4 rounded-md shadow-sm font-semibold inline-flex justify-center">
          Create
        </router-link>
      </div>
    </div>
    <div class="border-b border-gray-300 mt-4 mb-4 mr-4"></div>

    <div class="mb-3">
      <div class="grid grid-cols-12" v-if="false === loading.organizedEvents && null !== organizedEvents && organizedEvents.length > 0">
        <div class="col-span-4 mb-3" v-for="event in organizedEventsWithoutDesc" :key="event.id">
          <EventOnList :event="event">
            <div class="border-b mt-4 mb-4"></div>
            <div class="flex -space-x-px text-gray-600 items-center">
              <router-link :to="{name: 'account-edit-event', params: { id: event.id }}"
                           class="outline-none focus:outline-none bg-gray-100 border border-gray-300 py-1 px-2 rounded-l-sm text-sm font-semibold hover:bg-gray-50">
                Edit
              </router-link>
              <button @click="removeEvent(event)"
                 class="outline-none focus:outline-none bg-red-50 border border-gray-300 py-1 px-2 rounded-r-sm text-sm font-semibold hover:bg-gray-50">
                Delete
              </button>
            </div>
          </EventOnList>
        </div>
        <div class="col-span-12">
          <Pagination :page="1" route="account" page-parameter="organizedPage" :other-parameters="{attendedPage}"
                      next-label="Next" prev-label="Previous"></Pagination>
        </div>
      </div>

      <div class="grid grid-cols-12" v-if="true === loading.organizedEvents || null === loading.organizedEvents">
        <div class="col-span-4" v-for="index in 6" :key="index">
          <Loader class="mb-3 p-4 mr-4"></Loader>
        </div>
      </div>

      <RequestFailed v-if="false === loading.organizedEvents && (null === organizedEvents || organizedEvents.length === 0)"></RequestFailed>
    </div>
  </div>
</template>

<script>
import EventOnList from "@/components/EventOnList";
import AttendanceButtons from "@/components/AttendanceButtons";
import {computed, ref} from "@vue/reactivity";
import api from "@/api";
import {useUserContext} from "@/composables/user";
import Loader from "@/components/Loader";
import RequestFailed from "@/components/RequestFailed";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";
import {useRoute} from "vue-router";
import {watch} from "@vue/runtime-core";

export default {
  name: "Account",
  components: {EventOnList, AttendanceButtons, Loader, RequestFailed, Breadcrumbs, Pagination},
  setup() {
    const organizedEvents = ref(null);
    const attendedEvents = ref(null);
    const loading = ref({
      organizedEvents: null,
      attendedEvents: null
    });
    const organizedEventsWithoutDesc = computed(
        () => (organizedEvents.value || []).map(e => ({...e, description: null}))
    );
    const attendedEventsWithoutDesc = computed(
        () => (attendedEvents.value || []).map(e => ({...e, description: null}))
    );
    const {user} = useUserContext();
    const route = useRoute();
    const organizedPage = computed(() => Number(route.query.organizedPage) || 1);
    const attendedPage = computed(() => Number(route.query.attendedPage) || 1);
    watch(
        organizedPage, async (c, p) => c !== p && c ? await fetchOrganizedEvents(c) : null
    );
    watch(
        attendedPage, async (c, p) => c !== p && c ? await fetchAttendedEvents(c) : null
    );

    const fetchOrganizedEvents = async (page = 1) => {
      const t = setTimeout(() => loading.value.organizedEvents = true, null === organizedEvents ? 1 : 1000);
      try {
        if (user.value.userId) {
          organizedEvents.value = (await api.get(`/events-organized-by-user/${user.value.userId}?page=${page}`)).data.data;
        }
      } catch (e) {
        organizedEvents.value = null;
      } finally {
        clearTimeout(t);
        loading.value.organizedEvents = false;
      }
    }
    const fetchAttendedEvents = async (page = 1) => {
      const t = setTimeout(() => loading.value.attendedEvents = true, null === attendedEvents ? 1 : 1000);
      try {
        attendedEvents.value = (await api.get(`/events-attendance?page=${page}`)).data.data;
      } catch (e) {
        attendedEvents.value = null;
      } finally {
        clearTimeout(t);
        loading.value.attendedEvents = false;
      }
    }

    const removeEvent = async (event) => {
      try {
        await api.delete(`/events/${event.id}`);
        organizedEvents.value = organizedEvents.value.filter(e => e.id !== event.id);
      } catch (e) {
        alert(`Cannot delete event ${event.name}`);
      }
    }

    fetchAttendedEvents(attendedPage.value);
    fetchOrganizedEvents(organizedPage.value);

    return {
      loading,
      user,
      attendedEvents,
      organizedEvents,
      organizedEventsWithoutDesc,
      attendedEventsWithoutDesc,
      attendedPage,
      organizedPage,
      removeEvent,
      links: [
        {
          label: 'Account',
          route: 'account',
          params: {}
        }
      ]
    }
  }
}
</script>
