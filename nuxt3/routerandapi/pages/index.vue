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

    <div>
      <ContentDoc />
    </div>
  </div>
</template>

<script setup lang="ts">
import { globalCounter } from "~/composables/states";

const { $sayPiczes } = useNuxtApp();
const counter = useState("counter", () => 0);
const counterGlobal = globalCounter();

const onClick = () => {
  $sayPiczes("piczeeess");
};
</script>
