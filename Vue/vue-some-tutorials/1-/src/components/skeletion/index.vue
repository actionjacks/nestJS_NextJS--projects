<template>
  <div class="profile-card">
    <div class="profile-image">
      <img :src="dummyData.pic" />
    </div>
    <div class="profile-info">
      <span> Written By </span>
      <h3>{{ dummyData.name }}</h3>
      <p>{{ dummyData.bio }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

const loadDummyData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "dummy-data-name",
        pic: "./assets/avatar.jpeg",
        bio: "bio-dummy-data",
      });
    }, 3000);
  });
};

type DummyDataType = {
  pic: string;
  name: string;
  bio: string;
};
export default defineComponent({
  setup() {
    const dummyData = ref<DummyDataType | unknown>([]);

    onMounted(async () => {
      dummyData.value = await loadDummyData();
    });

    return { dummyData };
  },
});
</script>

<style scoped>
.profile-card {
  width: 100%;
  height: 200px;
  background: rgb(255, 255, 255);
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 20px;
}
.profile-image {
  width: 10%;
  float: left;
}
.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 5px solid #42b883;
  padding: 5px;
}
.profile-info {
  width: 85%;
  float: right;
}
.profile-info span {
  text-transform: uppercase;
  color: #777;
  letter-spacing: 3px;
}
.profile-info h3 {
  margin: 10px 0;
  font-size: 1.5em;
  color: #222;
}
.profile-info p {
  line-height: 140%;
  color: #777;
}
</style>