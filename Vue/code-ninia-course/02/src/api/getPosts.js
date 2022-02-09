import { ref } from "vue";

export const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("no data avilable");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err;
    }
  };
  return { posts, error, load };
};
