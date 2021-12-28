export default {
  increment(context) {
    console.log(context);
    setTimeout(() => {
      context.commit('increment');
    }, 2000);
  },
  incrase(context, payload) {
    context.commit('incrase', payload);
  },
};
