const app = Vue.createApp({
  data(){
    return{
      courseGoal:'loooooooooool',
      H1courseGoal:'<h1>llllllll</h1>',
      vueLink:'google.pl',
      dataA:'AAAAAAAAA',
      dataB:'BBBBBBBBB'
    }
  },

  methods:{
    outputGoal(){
      const randomNumber = Math.random()
      if(randomNumber < 0.5){
        return this.dataA
      }else{
        return this.dataB
      }
    }
  }
})
app.mount('#user-goal')