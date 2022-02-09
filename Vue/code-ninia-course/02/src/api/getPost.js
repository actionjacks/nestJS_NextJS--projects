import { ref } from "vue";

export const getPosts = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts" + id);
      if (!data.ok) {
        throw Error("no data avilable");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err;
    }
  };
  return { post, error, load };
};
