<template>
  <Layout></Layout>
</template>

<script>
import {useUserProvider} from "@/composables/user";
import Layout from "@/Layout";

export default {
  name: "App",
  components: {Layout},
  setup() {
    useUserProvider();
  }
}
</script>
