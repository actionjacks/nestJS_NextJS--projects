<template>
  <div class="slide">
    <transition name="slide">
      <slot />
    </transition>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
