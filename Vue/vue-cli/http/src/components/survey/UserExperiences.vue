<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">LOADING</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && results.length === 0">No ratings..</p>
      <ul v-else-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperience() {
      this.isLoading = true;
      this.error = null;

      fetch('https://jackmessenger-e9aff.firebaseio.com/vuetutorial.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          this.isLoading = false;

          //obj from firebase 21343242:{name:'lorem',rating:'lorem'}
          const result = [];

          for (const id in data) {
            result.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = result;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading: false;

          this.error = 'try again error';
        });
    },
  },
  mounted() {
    this.loadExperience();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
