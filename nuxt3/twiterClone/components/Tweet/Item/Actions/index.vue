<template>
  <div class="flex items-center justify-around w-full">
    <TweetItemActionsIcon
      color="blue"
      @on-click="emits('onCommentClick')"
      :size="size"
    >
      <template v-slot:icon="{ classes }">
        <ChartBarIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ props.tweet.repliesCount }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <ReceiptPercentIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </TweetItemActionsIcon>
  </div>
</template>

<script setup>
import TweetItemActionsIcon from "@/components/Tweet/Item/Actions/Icon.vue";
import {
  ChartBarIcon,
  ReceiptPercentIcon,
  HeartIcon,
} from "@heroicons/vue/24/solid";

const emits = defineEmits(["onCommentClick"]);

const props = defineProps({
  tweet: { type: Object, required: true },
  compact: { type: Boolean, default: false },
});

const showStats = computed(() => props.compact);
const size = computed(() => (props.compact ? 5 : 8));

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
</script>
