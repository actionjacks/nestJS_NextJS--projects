export default defineNuxtPlugin((nuxtApp) => {
  console.log({ nuxtApp });

  function sayPiczes(name: string) {
    console.log("from plugin", name);
  }

  return {
    provide: {
      sayPiczes,
    },
  };
});
