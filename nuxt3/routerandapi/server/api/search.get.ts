export default defineEventHandler((event) => {
  const { q = "" } = getQuery(event);

  console.log(event);

  return {
    sthisFromApi: "sthisFromApi",
    thisfromApi: `${q}`,
  };
});
