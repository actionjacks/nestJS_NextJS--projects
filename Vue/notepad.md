## shortcut ---------------------------------

<input type="text" v-model='inputValue'>
v-click="method"
@click="method"

v-bind:value="{{}}"
:value="{{}}"
:style=""
:class="[demo, {active:boxB}]"

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

## ------------------------------------------

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
