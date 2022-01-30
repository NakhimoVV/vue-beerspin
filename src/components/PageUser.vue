<template>
  <section class="page-user">
    <BoxUser v-bind:userData="userData" @change-user="changeUser" />
    <BoxHistory />
  </section>
</template>

<script>
import BoxUser from "@/components/pageuser-boxes/BoxUser";
import BoxHistory from "@/components/pageuser-boxes/BoxHistory";
export default {
  props: ["userData"],
  components: { BoxUser, BoxHistory },
  methods: {
    changeUser() {
      this.$emit("changeUser");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";
.page-user {
  display: grid;
  height: inherit;
  grid-template-rows: 0.6fr minmax(150px, 1fr);
  justify-items: center;
  position: relative;
  padding: 10px;
  @media (max-width: $bp2+px) {
    height: initial;
    grid-template-rows: 1fr;
  }
  &__history {
    margin: 15px 0px 5px 0px;
  }
  &__showmobile {
    display: none;
    @media (max-width: $bp2+px) {
      display: block;
      position: fixed;
      z-index: 1;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: rgba(98, 161, 137, 0.6);
      transition: left 1.1s ease-out 0s;
      padding: 28% 0px 18% 0px;
    }
    @media (min-width: 790px) and (max-width: $bp2+px) {
      padding: 20% 0px 18% 0px;
    }
  }
  &__showmobile.active {
    left: 0;
  }
}
</style>