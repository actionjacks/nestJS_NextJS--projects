<template>
  <base-card>
    <base-button
      :class="storedResButtonMode"
      @click="setSelectedTab('stored-resources')"
      >Stored resources</base-button
    >
    <base-button
      :class="addResButtonMode"
      @click="setSelectedTab('add-resources')"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
  components: { StoredResources, AddResources },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResorces: [
        {
          id: 'first id',
          title: 'first dummy title',
          description: 'first description dummy',
          link: 'https://google.pl',
        },
        {
          id: 'second id',
          title: 'second dummy title',
          description: 'second description dummy',
          link: 'https://google.pl',
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResources(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResorces.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      const elementToDeleted = this.storedResorces.findIndex(
        (res) => res.id === id
      );
      this.storedResorces.splice(elementToDeleted, 1);
    },
  },
  provide() {
    return {
      resources: this.storedResorces,
      addResources: this.addResources,
      deleteResource: this.removeResource,
    };
  },
};
</script>

<style scoped></style>
