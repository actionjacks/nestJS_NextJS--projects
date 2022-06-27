<template>
  <div class="max-w-xl w-full mx-auto mb-4">
    <Breadcrumbs :links="links"></Breadcrumbs>

    <div class="bg-white text-sm rounded-sm w-full mb-4 border border-indigo-200">
      <Errors :errors="esErrors"></Errors>
      <form @submit.prevent="createEvent">
        <div class="grid grid-cols-6 gap-6 p-5">
          <div class="col-span-6">
            <label for="name" class="block text-sm font-medium text-gray-700">Event name</label>
            <input type="text" id="name" v-model="eventData.name"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6">
            <label for="description" class="block text-sm font-medium text-gray-700">Event description</label>
            <textarea id="description" v-model="eventData.description"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-32">
            </textarea>
          </div>

          <div class="col-span-6">
            <label for="address" class="block text-sm font-medium text-gray-700">Event address</label>
            <textarea id="address" v-model="eventData.address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </textarea>
          </div>

          <div class="col-span-3">
            <label for="when" class="block text-sm font-medium text-gray-700">When does the event happen</label>
            <input type="datetime-local" id="when" v-model="eventData.when"
                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
        </div>

        <div class="col-span-6 flex justify-end bg-gray-100 p-5 rounded-b-sm">
          <ButtonSubmitIndigo label="Create" :loading="esLoading"></ButtonSubmitIndigo>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import ButtonSubmitIndigo from "@/components/ButtonSubmitIndigo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Errors from "@/components/Errors";
import {useRouter} from "vue-router";
import {ref} from "@vue/reactivity";
import api from "@/api";
import {useEventSaving} from "@/composables/eventSaving";

export default {
  name: "CreateEvent",
  components: {ButtonSubmitIndigo, Breadcrumbs, Errors},
  setup() {
    const router = useRouter();
    const eventData = ref({
      name: null,
      description: null,
      address: null,
      when: null
    });
    const {esLoading, esErrors, storeEvent} = useEventSaving(api);
    const createEvent = async () => {
      await storeEvent(eventData.value);
      if (0 === esErrors.value.length) {
        await router.back();
      }
    }

    return {
      links: [
        {
          label: 'Account',
          route: 'account',
          params: {}
        },
        {
          label: 'Create Event',
          route: 'account-create-event',
          params: {}
        }
      ],
      eventData,
      createEvent,
      esLoading,
      esErrors
    }
  }
}
</script>
