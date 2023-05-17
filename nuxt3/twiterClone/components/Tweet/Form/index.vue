<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetItem
        :tweet="props.replyTo"
        v-if="props.replyTo && props.showReply"
        hideActions
      />
      <TweetFormInput
        :placeholder="props.placeholder"
        :user="props.user"
        @onSubmit="handleFormSubmit"
      />
    </div>
  </div>
</template>

<script setup>
import TweetItem from "@/components/Tweet/Item/index.vue";
import UISpinner from "@/components/UI/Spinner.vue";
import defineEmits from "@/components/composables/useEmitter.js";
import useTweets from "~/components/composables/useTweets";
import TweetFormInput from "@/components/Tweet/Form/Input.vue";

const props = defineProps({
  user: { type: Object, required: true },
  placeholder: { type: String, default: "What's happening ?" },
  replyTo: { type: Object, default: null },
  showReply: { type: Boolean, default: false },
});

const { postTweet } = useTweets();
const emits = defineEmits(["onSuccess"]);
const loading = ref(false);

async function handleFormSubmit(data) {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id,
    });

    emits("onSuccess", response.tweet);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
