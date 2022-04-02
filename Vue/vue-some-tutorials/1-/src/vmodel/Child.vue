<template>
  <div>
    <input
      :value="myValue"
      @input="$emit('update:myValue'), $event.target.value"
    />
    <input
      :value="lastName"
      @input="$emit('update:lastName'), $event.target.value"
    />
    <input :value="myModifure" @input="emitValue('myModifure', $event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type CustomEmit = "myModifure";

export default defineComponent({
  props: {
    myValue: { type: String, required: false, default: "" },
    lastName: { type: String, required: false, default: "" },
    myModifure: { type: String, required: false, default: "" },
    modelModifiers: { type: Object, required: false, default: null },
  },
  emits: ["update:myValue", "update:lastName", "update:myModifure"],
  setup(props, { emit }) {
    const emitValue = (propName: CustomEmit, e: Event) => {
      const value = e.target as HTMLTextAreaElement;
      let newValue: string = value.value;

      if (props.modelModifiers["no-whitespace"]) {
        let modify = newValue.replace(/\s/g, "");
        newValue = modify;
      }
      emit(`update:${propName}`, newValue);
    };

    return {
      emitValue,
    };
  },
});
</script>

<style scoped>
</style>