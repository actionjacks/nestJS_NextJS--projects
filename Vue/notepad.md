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
