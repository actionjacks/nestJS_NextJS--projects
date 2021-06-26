<template>
  <div class="max-w-xl w-full mx-auto mb-4">
    <Breadcrumbs :links="links"></Breadcrumbs>

    <Loader v-if="efLoading" class="p-4" :blocks="5"></Loader>

    <div class="bg-white text-sm rounded-sm w-full mb-4 border border-indigo-200" v-if="!efLoading && eventData.name">
      <Errors :errors="esErrors"></Errors>

      <div class="border rounded-md border-yellow-300 bg-yellow-50 text-yellow-900 mx-5 mt-5 p-4"
           v-if="attendeeCount">
        <div class="font-semibold">Hey there!</div>
        <div>I see you'd like to change an event that has already gained interest of {{ attendeeCount }} people. Be sure
          to notify them about the change.
        </div>

      </div>

      <form @submit.prevent="updateEvent">
        <div class="grid grid-cols-6 gap-6 p-5">
          <div class="col-span-6">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Event name
            </label>
            <input type="text" id="name" v-model="eventData.name" :disabled="efLoading"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6">
            <label for="description" class="block text-sm font-medium text-gray-700">
              Event description
            </label>
            <textarea id="description" v-model="eventData.description" :disabled="efLoading"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-32">
            </textarea>
          </div>

          <div class="col-span-6">
            <label for="address" class="block text-sm font-medium text-gray-700">
              Event address
            </label>
            <textarea id="address" v-model="eventData.address" :disabled="efLoading"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </textarea>
          </div>

          <div class="col-span-3">
            <label for="when" class="block text-sm font-medium text-gray-700">
              When does the event happen
            </label>
            <input type="datetime-local" id="when" v-model="eventData.when" :disabled="efLoading"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
        </div>

        <div class="col-span-6 flex justify-end bg-gray-100 p-5 rounded-b-sm">
          <ButtonSubmitIndigo label="Save Changes" :loading="false"></ButtonSubmitIndigo>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import ButtonSubmitIndigo from "@/components/ButtonSubmitIndigo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Errors from "@/components/Errors";
import {useRoute, useRouter} from "vue-router";
import {computed, reactive} from "@vue/reactivity";
import api from "@/api";
import Loader from "@/components/Loader";
import {useEventSaving} from "@/composables/eventSaving";
import {useEventFetching} from "@/composables/eventFetching";

export default {
  name: "EditEvent",
  components: {ButtonSubmitIndigo, Breadcrumbs, Errors, Loader},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const eventData = reactive({
      name: null,
      description: null,
      address: null,
      when: null
    });
    let event = null;
    const {esLoading, esErrors, storeEvent} = useEventSaving(api);
    const {efLoading, fetchEvent} = useEventFetching(api);

    const updateEvent = async () => {
      await storeEvent(eventData, route.params.id);

      if (0 === esErrors.value.length) {
        await router.back();
      }
    }

    const fetchTheEvent = async () => {
      event = await fetchEvent(route.params.id);
      eventData.name = event.name;
      eventData.description = event.description;
      eventData.when = event.when;
      eventData.address = event.address;
    }

    fetchTheEvent();

    return {
      links: [
        {
          label: 'Account',
          route: 'account',
          params: {}
        },
        {
          label: 'Edit Event',
          route: 'account-edit-event',
          params: {id: route.params.id}
        }
      ],
      attendeeCount: computed(() => (event?.attendeeAccepted + event?.attendeeMaybe) || 0), eventData, updateEvent, esErrors, esLoading, efLoading
    }
  },
}
</script>
