<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <p>https://icones.js.org/collection/mdi</p>
    <IconsAlert class="h-10 w-10" />
    <button class="bg-green-500 rounded px-2">
      <NuxtLink to="/events"> events route </NuxtLink>
    </button>

    <button class="bg-green-500 rounded px-2 ml-10" @click="onClick">
      say piczes
    </button>

    <div class="grid-cols-1">
      {{ counter }}
      <button class="bg-green-500 rounded px-2" @click="counter++">+</button>
      <button class="bg-green-500 rounded px-2" @click="counter--">-</button>
    </div>

    <div class="grid-cols-1">
      {{ counterGlobal }} global counter
      <button class="bg-green-500 rounded px-2" @click="counterGlobal++">
        +
      </button>
      <button class="bg-green-500 rounded px-2" @click="counterGlobal--">
        -
      </button>
    </div>

    <div class="p-10 border-2 m-5">
      <p>this content is from postgress docker container</p>
      <pre>
        <div v-for="user of allUsers_">
          <span :key="user.id">
            {{ user }}
          </span>
        </div>
      </pre>
      <ContentDoc />
    </div>
  </div>
</template>

<script setup lang="ts">
import { globalCounter } from "~/composables/states";

const { $sayPiczes } = useNuxtApp();
const counter = useState("counter", () => 0);
const counterGlobal = globalCounter();

const allUsers_ = ref<Array<{ email: string; name: string; id: number }>>([]);

const onClick = () => {
  $sayPiczes("piczeeess");
};

onBeforeMount(async () => {
  const { allUsers } = await $fetch("/api/primsatest", {
    method: "GET",
  });

  allUsers_.value = allUsers as Array<{
    email: string;
    name: string;
    id: number;
  }>;
});
</script>
