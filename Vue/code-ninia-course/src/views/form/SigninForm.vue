<template>
  <form @submit.prevent="handleSubmit">
    <label for="emai"></label>
    <input type="email" id="email" required v-model="email" />
    <label for="paswword"></label>
    <br />
    <input type="paswword" id="paswword" required v-model="paswword" />
    <br />
    <select v-model="role">
      <option value="developer">web developer</option>
      <option value="designer">web designer</option>
    </select>
    <br />
    {{ role }}
    <div class="radio-checkbox">
      <br />
      <div class="terms">
        <input v-model="terms" type="checkbox" required />
        <label>Accept terms {{ terms }}</label>
      </div>
      <br />
      <div>
        <input type="checkbox" value="dupa1" v-model="names" />
        <label for="">dupa</label>
      </div>
      <div>
        <input type="checkbox" value="dupa2" v-model="names" />
        <label for="">dupa</label>
      </div>
      <div>
        <input type="checkbox" value="dupa3" v-model="names" />
        <label for="">dupa</label>
      </div>
      <br />
    </div>
    {{ names }}
    <br />
    <!-- render array -->
    <label>skills</label>
    <li v-for="skill in skills" :key="skill">
      <span>{{ skill }}</span>
      <span ref="item" @click="deleteElement(skill)">X</span>
    </li>
    <input type="text" v-model="tempSkill" @keyup.enter="addSkills" />

    <!-- for submmit form -->
    <button>Submit</button>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "form__",
    setup() {
      const email = ref<string>("");
      const paswword = ref<string>("");
      const role = ref<string>("select role");
      const terms = ref("true");

      const tempSkill = ref<string>("");
      const skills = ref<string[]>([]);

      function addSkills(e: Event) {
        console.log(e);
        const key = e.target as HTMLInputElement;
        const minLen = key.value.length;
        console.log(minLen);
        if (minLen > 6) {
          // ?? fixme
          skills.value.push(tempSkill.value);
          tempSkill.value = "";
        }
      }

      function deleteElement(item: string) {
        const newSkills = skills.value.filter((i) => i !== item);
        skills.value = newSkills;
      }

      function handleSubmit() {
        //
      }

      return {
        email,
        paswword,
        role,
        terms,
        tempSkill,
        addSkills,
        skills,
        deleteElement,
        handleSubmit,
      };
    },
    // ?? fixme
    data() {
      return {
        names: [],
      };
    },
  });
</script>

<style scoped></style>
