## shortcut ---------------------------------
```
<input type="text" v-model='inputValue'>
v-click="method"
@click="method" @input=''
// v-modal.lazy ;v-modal.trim ;v-modal.number
```
```
v-bind:value="{{}}"
:value="{{}}"
:style=""
:class="[demo, {active:boxB}]"
```
//item is hidden
v-show='' - you can when you don't need other conditions

//render items if condition meet
v-if=''
v-else-if=''
v-else=''
//<p v-if='goals.length === 0'>if arr no items render this<p>
//<p v-else-if='goals.length >=3'>else condition</p>
//<button v-elese>click me!</button>

//map items
//<ul v-for='(item,index) in items' :key='item'>{{item}}</ul>
//<ul v-for='(item,index) in items' :key='item' @click='remove(index)'>{{item}}</ul>

//<li v-for='value in {name:"jacek",age:22}' :key='value'>{{value}}</li>
//<li v-for='num in 10'>{{num}}</li>

//ref
ref='lorem'
get ref
this.$refs.lorem

//props
to pass true or false need bind
<my-component :is-named='true'>

## !! change props passed inside component and change in parent !!

in child component
props:[],
emits:["toggle-favorite"],
method
isFavorite(){
this.$emit("toggle-favorite");//name of event
}

in parent
as props @toggle-favorite='toggleFavoriteStatus'
method
toggleFavoriteStatus(){
//some logic
}

## provide inject data some like redux in react

parent component
provide:{
//some data
topic:[{lotrm:lorem}]
}

child component
inject:['topic']

## can use provide like method

data(){
return {
topics:[]
}
},
provide(){
retrun {
topics:this.topics
}
}

## we can pass function inject

//in parent component
provide() {
return {
selectTopic: this.activateTopic,
};
},
methods: {
activateTopic(topicId) {
//this.activeTopic = this.topics.find((topic) => topic.id === topicId);
},
},
//in child component
<template>
<button @click="selectTopic(id)">Learn More</button>
</template>
inject: ['selectTopic'],

## wraped component

<template v-slot:header> or <template #header>

## -------------------------------------------------------------------

## vue - directives

## use link or input

## v-bind (set value )

v-bind:<src, value>="<data or variable>"

## v-on:click="<method>" v-on:input

v-on:click="addToCounter"

## when pass arg on function and need event obj use $event

v-on:input="function($event, args)"

function(e,n ame){}

## modif .prevent

## v-on:submit.prevent="submitForm" or v-on:click.left (click left mouse btn)

## v-on:keyup.enter='confirmInput'

preventDefault()

## v-once - no render element after rerender !!!!!

## v-model="<some data>" = this chandle input update value and store in data obj

 <input type="text" v-model='inputValue'>

## computed: { use ony to display value transform them DYNAMIC VALUE'S

<p>Full name {{fullName}}</p>
  computed: {
    fullName() {
      if (this.inputValue === "") {
        return "";
      } else {
        return this.inputValue + " " + "Zablockie";
      }
    },
  },

## watcher

{ data() {
return {
inputValue: "",
};
watch: {
inputValue() {
console.log("this watcher well trigger after inputValue change");
},

## shorcuts

v-click="method"
@click="method"

v-bind:value="{{}}"
:value="{{}}"

## inline STYLE ====================

<div :style='{borderColor:boxA ? "red":"#ccc" }' class="demo" @click='boxSelected("A")'></div>

  <div :class="boxA ? 'demo active':'demo'" @click='boxSelected("A")'></div>

## BEST

 <div :class="{demo:true,active:boxA}" @click='boxSelected("A")'></div>
   <div class="demo" :class="{active:boxA}" @click='boxSelected("A")'></div>

## can use computed obj

boxAClasses() {
return { active: this.boxA };
},

## can use array

:class="[demo, {active:boxB}]"

## v-if=""

data() {
return { goals: [] };
},

<p v-if='goals.length === 0'>if arr no items render this<p>

## v-else can only use after v-if

<p v-if='goals.length === 0'>if arr no items render this<p>
<p v-else-if='goals.length >=3'>else condition</p>
<button v-elese>click me!</button>

## v-for map items

data() {
return { goals: [] };
},

<ul v-for='goal in goals'>
<p>{{goal}}</p>
</ul>

## ref='<string>'

ref='lorem'
in js file
this.$refs.lorem

## life-cucle methods

in .js
1-beforeCreate(){}
2-created(){}
3-beforeMount(){}
4-mounted(){}
5-beforeUpdate(){}
6-updated(){}

beforeUnmount(){}
unmounted(){}

## pass props name in array or name and type in obj

props:["jacek","dupa","rara"]
props:{
jacek:String,dupa:String,rara:String
}

## change props inside props and change in parent !!

in child component
method
this.$emit("toggle-favorite");

in parent
as props @toggle-favorite=''
method
some logic

## pass props as obj

<template>
  <user-data v-bind="person"></user-data>
</template>
 
<script>
  export default {
    data() {
      return {
        person: { firstname: 'Max', lastname: 'Schwarz' }
      };
    }
  }
</script>

## register components in main.js

import Component './../'

const app=createApp({})
app.component('component',Component)

## provide inject data some like redux in react

parent component
provide:{
//some data
topic:[{lotrm:lorem}]
}

child component
inject:['topic']

## can use provide like method

data(){
return {
topics:[]
}
},
provide(){
retrun {
topics:this.topics
}
}

## register components in main.js componnet is register globally

to wrap content whit componet use <slot> tag in wrapper componet
! - can use more than 1 slot

<div>
  <slot></slot>
</div>
<section>
  <slot name='section'></slot>
</section>
..
  <my-component-wrapper>
    <template v-slot:section>
    </template>
    <template v-slot:default>
    </template>
  </my-component-wrapper>

## to get slot proxy

mounted(){
consol.log(this.$slots)
}
and we can check if v-slot: is passed
v-if="$slots.header"

## use dynamic walues in component wrapper

<li v-for="goal in goals">
  <slot
  :item="goal"
  ></slot>
</li>

## dynamic components

import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

data() {
return {
selectedComponent: "active-goals",
<component :is="selectedComponent"></component>
//wrap
<keep-alive>
<component :is="selectedComponent"></component>
</keep-alive>
to save inputs from switched components

## teleport

<teleport to=''></teleport>

## 
//wrap element
    <transition>
      <p v-if="paraIsVisible">this is sometimes visible...</p>
    </transition>
    <button @click="animateParagraph">Toggle paragraph</button>
//default class supported by vue
//anim when enter
.v-enter-from{opacity:0;transform:translateY(-30px);}
.v-enter-active{transition:all 0.3s;}
.v-enter-to{opacity:1;transform:translateY(0);}

//anim when element leave
.v-leave-from{opacity:1;transform:translateY(0);}
.v-leave-active{transition:all 0.3s;}
.v-leave-to{opacity:0;transform:translateY(-30px);}

//we can use custom animation in 
.v-enter-active{
  animation: <my-animation> 0.3s ease-in;
}
.v-leave-active{
  animation:slide-scale 0.3s ease-out
}
   <!-- custom prefix name class -->
    <transition name="para">
    .para-enter-from{opacity:0;transform:translateY(-30px);}
    .para-enter-active{transition:all 0.3s;}
    .para-enter-to{opacity:1;transform:translateY(0);}
  <!-- custom named class -->
    <transition enter-to-class="some-class">
