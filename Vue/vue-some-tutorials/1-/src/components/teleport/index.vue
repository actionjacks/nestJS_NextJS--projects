<template>
  <div class="root">
    <button @click="isOpen = true">OPEN</button>

    <teleport to="#modal">
      <div class="modal">
        <div>
          <ModalContent
            @close="isOpen = false"
            title="title------modal"
            msg="msg----------modal"
          />
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ModalContent from "@/components/teleport/ModalContent.vue";

export default defineComponent({
  components: { ModalContent },
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
});
</script>

<style scoped>
.root {
  position: relative;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
}
</style>