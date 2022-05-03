<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }">
            blog
          </router-link>

          <ul>
            <li>
              <a href="#" class="svg-icon">
                <youtubeIcon />
              </a>
            </li>
            <li>
              <a href="#" class="svg-icon">
                <linkedinIcon />
              </a>
            </li>
            <li>
              <a href="#" class="svg-icon">
                <tweeterIcon />
              </a>
            </li>
            <li>
              <a href="#" class="svg-icon">
                <istagramIcon />
              </a>
            </li>
          </ul>
        </div>

        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }"
              >Blogs</router-link
            >
            <router-link class="link" to="#">Create Post</router-link>
            <router-link class="link" :to="{ name: 'Register' }"
              >Login/Register</router-link
            >
          </ul>
        </div>
      </div>

      <div class="right">
        <p>lorem lorem lorem</p>
      </div>
    </div>
  </footer>
</template>
//50
<script lang="ts">
import { defineComponent } from "vue";
import youtubeIcon from "@/assets/Icons/youtube-brands.vue";
import linkedinIcon from "@/assets/Icons/linkedin-brands.vue";
import tweeterIcon from "@/assets/Icons/twitter-brands.vue";
import istagramIcon from "@/assets/Icons/instagram-brands.vue";

export default defineComponent({
  components: { youtubeIcon, linkedinIcon, tweeterIcon, istagramIcon },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;

  .constainer {
    display: flex;
    flex-direction: column;
    grid-auto-flow: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
    }
  }

  .left {
    gap: 32px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      flex-direction: row;
      align-items: initial;
      gap: 0;
    }
  }

  .header {
    text-align: center;
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }

  ul {
    gap: 16px;
    list-style: none;
    display: flex;
  }

  .col-1,
  .col-2 {
    gap: 32px;
    display: flex;
    flex: 1;
    @media (min-width: 800px) {
      gap: 0;
    }
  }

  .col-1 {
    flex-direction: column;

    h2 {
      text-align: center;
      @media (min-width: 800px) {
        text-align: initial;
      }
    }
    ul {
      margin-top: auto;

      li {
        display: flex;
        align-items: center;
        .svg-icon {
          width: 24px;
          height: auto;
          color: #fff;
        }
      }
    }
  }

  .col-2 {
    ul {
      height: 100%;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      @media (min-width: 800px) {
        flex-direction: column;
      }
    }
  }

  .right {
    gap: 32px;
    color: #fff;
    align-items: center;
    flex-direction: column;
    @media (min-width: 800px) {
      align-items: flex-end;
      gap: 0;
    }
  }

  p {
    margin-top: auto;
  }
}
</style>