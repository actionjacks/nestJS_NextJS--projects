import {reactive, RendererElement, RendererNode, VNode}from 'vue'
type Store = {
  shadowText: string 
}

const store = reactive({})

export function useStore(){
  return store as Store
}