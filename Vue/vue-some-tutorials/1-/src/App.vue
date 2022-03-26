<template>
  <div class="vuelidate">
    <Vuelidate />
  </div>

  <div class="dropdown-wrapper">
    <p>custom-dropdown</p>
    <DropDown />
  </div>

  <div class="skeletion-wrapper">
    <p>profile-skeletion</p>
    <Suspense>
      <template #default>
        <ProfileCard />
      </template>
      <template #fallback>
        <CardSkeletion />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//dropdown
import DropDown from "@/components/drop-down/index.vue";
//skeletion
import ProfileCard from "@/components/skeletion/index.vue";
import CardSkeletion from "@/components/skeletion/CardSkeletion.vue";
//validator
import Vuelidate from "@/components/vuelidate-validate-lib/index.vue";

export default defineComponent({
  components: { DropDown, ProfileCard, CardSkeletion, Vuelidate },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.skeletion-wrapper {
  margin-top: 15px;
  border-radius: 15px;
  border: 1px solid rgb(204, 252, 236);
  border: 1px solid rgb(168, 238, 229);
  max-width: 500px;
}
</style>
