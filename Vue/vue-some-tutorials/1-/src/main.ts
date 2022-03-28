import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
// custom directive
.directive('font-size',{
  // beforeMount:(el,binding)=>{
  //   el.style.fontSize = binding.value +'px'
  // },
  // updated:(el,binding)=>{
  //   el.style.fontSize = binding.value +'px'
  // },
  beforeMount:(el,binding)=>{
    let size = 12

    switch(binding.arg){
      case 'small':
        size=8
        break
      case 'large':
        size=24
        break
    }
    el.style.fontSize = binding.value + 'px'
  }
})
.mount('#app')
