<template>
  <div>
    <h1>llorem</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref } from "vue";

type Data = {
  show: {
    name: string;
    image: {
      medium: string;
    };
  };
};

export default defineComponent({
  setup(props, { slots }) {
    let inputValue = ref<string | null>("");
    let shows = ref<string[]>([]);
    let error = ref<string | null>(null);

    const searchText = async (search: string) => {
      if (!search) return;
      shows.value = [];
      console.log("got here", search);

      const searchT = await fetch(
        `http://api.tvmaze.com/search/shows?q=${search}`
      ).catch((_error: string | null) => {
        if (!_error) return;
        return (error.value = "error" + _error);
      });
      if (searchT instanceof Response) {
        shows.value = await searchT.json().catch((_error: string | null) => {
          if (!_error) return;
          return (error.value = "error" + _error);
        });
      }
    };
    //scope slot
    const ss = (show: any) => (slots.sc ? slots.sc(show) : []);

    return () => {
      return h(
        "form",
        {
          style: "border:1px solid red;color:red;max-width:768px; margin:auto",
          onSubmit: (e: Event) => e.preventDefault(),
        },
        [
          ss({ shows: shows.value }),
          h("input", {
            onChange: (e: Event) => {
              let value = e.target as HTMLInputElement;
              inputValue.value = value.value;
            },
          }),
          h(
            "button",
            {
              onClick: async () => {
                searchText(inputValue.value ?? "");
              },
            },
            "Press Me"
          ),
          h("div", { class: "shows" }, [
            shows.value?.map((show: Data | any) => {
              return error.value
                ? h("div", error.value)
                : h("div", { class: "show" }, [
                    h("div", show.show.name),
                    h("img", { src: show.show.image?.medium }),
                  ]);
            }),
          ]),
        ]
      );
    };
  },
});
</script>

<style scoped>
.show {
  margin: 10px;
  min-width: 210px;
}
.show {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
</style>