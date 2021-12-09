<template>
  <base-card>
    <template v-slot:header>
      <div>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </div>
    </template>

    <template v-slot:default>
      <section>
        <p>{{ infoText }}</p>
      </section>
    </template>
  </base-card>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
