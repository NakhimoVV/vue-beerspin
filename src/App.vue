<template>
  <div class="wrapper">
    <main class="page">
      <PageUser />
      <PageBeer />
    </main>
  </div>
</template>

<script>
import PageUser from "@/components/PageUser";
import PageBeer from "@/components/PageBeer";
export default {
  components: { PageUser, PageBeer },
  data() {
    return {
      // user: {
      //   username: "melissa.heaney",
      // },
    };
  },
  // mounted() {
  //   fetch("https://random-data-api.com/api/users/random_user")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.user = json;
  //     });
  // },
};
</script>

<style lang="scss">
@import "assets/variables.scss";
.wrapper {
  height: 100vh;
}
.page {
  height: inherit;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: $bp2+px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
}
</style>