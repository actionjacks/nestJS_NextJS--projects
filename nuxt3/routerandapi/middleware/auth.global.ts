export default defineNuxtRouteMiddleware((to, from) => {
  console.log("from global middleware", { to, from });
  // const isLogeedIn = false
  // if (isLogeedIn) {
  //   return  navigateTo()
  // }
  // return navigateTo()
});
