<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <p>{{ age }}</p>
    <UserData :userName="userName" :age="age" />
    <h3>{{ user.name }}</h3>
    <p>{{ user.agge }}</p>

    <button @click="setNewData">Change age</button>

    <div class="computed">
      <h2>{{ update }}</h2>
      <input type="text" placeholder="name1" @input="name1" />
      <!-- can use v-model -->
      <input type="text" placeholder="name2" v-model="setName2" />
      <!-- USE REF -->
      <div>
        <input type="text" ref="lastNameInput" />
        <button @click="setInputLastName">Set last name</button>
      </div>
    </div>
  </section>
</template>

<script>
//provide use inject to get data in component
import {
  ref,
  reactive,
  computed,
  watch,
  provide,
  onBeforeMount,
  // onUpdated,
} from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: { UserData },
  setup() {
    const userName = ref('Jacek');
    const age = ref(12);
    //reactive works only with objects
    const user = reactive({
      name: 'jacek-dupa',
      agge: 33,
    });
    //computed
    const name1 = ref('');
    const name2 = ref('');
    //refs
    const lastNameInput = ref(null);

    //use watch
    //1 arg watch ref listen for changes
    //2 arg callback
    watch(age, function (newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    });
    //watch 2 ref and run callback
    watch([name1, name2], function (newVals, oldVals) {
      console.log(newVals);
      console.log(oldVals);
    });

    setTimeout(() => {
      userName.value = 'dupa';

      user.name = 'kaklo';
      user.agge = 21;
    }, 3000);

    function setNewData() {
      age.value++;
    }

    const update = computed(() => {
      return name1.value + ' ' + name2.value;
    });
    function setName1(e) {
      name1.value = e.target.value;
    }
    function setName2(e) {
      name2.value = e.target.value;
    }

    const uName = computed(() => {
      return name1.value + ' ' + name2.value;
    });

    //ref
    function setInputLastName() {
      console.log(lastNameInput.value.value);
    }

    //provide use to inject data
    provide('userAge', age);

    //life cycle hooks
    //onBeforeMount in setup method
    //onUpdated
    onBeforeMount(() => {
      return null;
    });
    return {
      userName,
      age,
      user,
      setNewData,
      uName,
      update,
      name1,
      name2,
      setName1,
      setName2,
      lastNameInput,
      setInputLastName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
