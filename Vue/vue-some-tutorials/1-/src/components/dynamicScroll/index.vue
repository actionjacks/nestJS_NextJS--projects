<template>
  <main>
    <article>
      <section v-for="(header, index) in headers" :key="header">
        <h2 :id="index">{{ header }}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In animi
          quos illo ratione atque! Saepe, fugit iusto eveniet nemo magni totam
          deleniti impedit alias quo libero inventore recusandae quas! Rem.
          Suscipit libero temporibus autem ratione voluptas quam quos aspernatur
          recusandae dignissimos itaque omnis doloribus voluptates velit odit
          eveniet nesciunt repellat, beatae reiciendis quas quaerat deleniti
          provident? Veniam quam impedit tenetur? Officia voluptate ut dolore
          recusandae, itaque labore, sint in nesciunt quod reiciendis rerum
          voluptas? Maiores dolorum consequuntur, ducimus, voluptatibus atque
          officiis at, commodi labore sed quidem ullam dicta laudantium
          accusamus?
        </p>
      </section>
    </article>

    <aside>
      <div>
        <a
          v-for="(header, index) in headers"
          :key="header"
          :href="`#${index}`"
          :class="{ active: index == currentSection }"
        >
          {{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {
    const headers = ref<string[]>([
      "Section 1",
      "Section 2",
      "Section 3",
      "Section 4",
      "Section 5",
    ]);
    const currentSection = ref<any>("");

    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              currentSection.value = entry.target.getAttribute("id");
            }
          });
        },
        { rootMargin: "0px 0px -90% 0px" }
      );
      document.querySelectorAll("article h2").forEach((section) => {
        observer.observe(section);
      });
    });

    return { headers, currentSection };
  },
});
</script>

<style scoped>
main {
  display: flex;
}
article {
  width: 75%;
  margin-bottom: 500px;
}
aside {
  width: 25%;
}
aside > div {
  position: sticky;
  top: 20px;
  padding-left: 2em;
}
aside > div > a {
  display: block;
  color: #2c3e50;
  text-decoration: none;
  border-left: 1px solid #ccc;
  padding-left: 2em;
}
aside a.active {
  font-weight: bold;
  border-color: black;
}
</style>