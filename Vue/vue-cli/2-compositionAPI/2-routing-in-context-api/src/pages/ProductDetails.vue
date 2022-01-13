<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  setup(props) {
    console.log(props)
    const products = inject('products');

    const route = useRoute();
    //whit route
    const selectedProduct = computed(() =>
      products.value.find((prod) => prod.id === route.params.pid)
    );
    //whith props
    // const selectedProduct = computed(() =>
    //   products.value.find((prod) => prod.id === props.pid)
    // );

    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);
    const description = computed(() => selectedProduct.value.description);

    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
