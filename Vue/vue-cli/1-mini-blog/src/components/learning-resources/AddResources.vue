<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>pleas fill all inputs</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">OK</base-button>
    </template>
  </base-dialog>

  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title"> Title </label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description"> description </label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link"> Link </label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <base-button type="submit">Add Resources</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResources'],

  data() {
    return {
      inputIsInvalid: false,
    };
  },

  methods: {
    submitData() {
      const Title = this.$refs.titleInput.value;
      const Description = this.$refs.descInput.value;
      const Link = this.$refs.linkInput.value;

      if (
        (Title.trim() === '', Description.trim() === '', Link.trim() === '')
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResources(Title, Description, Link);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
