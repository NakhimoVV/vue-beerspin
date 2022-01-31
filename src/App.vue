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
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
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