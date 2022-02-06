<template>
  <div class="page-beer__card card-beer">
    <p class="card-beer__name">{{ BEERDATA.name }}</p>
    <p class="card-beer__brand">{{ BEERDATA.brand }}</p>
    <p class="card-beer__style">{{ BEERDATA.style }}</p>
    <p class="card-beer__hop">{{ BEERDATA.hop }}</p>
    <p class="card-beer__malts">{{ BEERDATA.malts }}</p>
    <p class="card-beer__alcohol">{{ BEERDATA.alcohol }}</p>
    <p class="card-beer__ibu">{{ BEERDATA.ibu }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["BEERDATA"]),
  },
  methods: {
    ...mapActions(["GET_BEERDATA_FROM_API"]),
  },
  mounted() {
    this.GET_BEERDATA_FROM_API();
  },
};
</script>

<style lang="scss" scoped>
.card-beer {
  text-align: center;
  &__name {
    font-family: "Road Rage";
    font-size: calc(40px + (80 - 40) * ((100vw - 320px) / (1600 - 320)));
    line-height: 1;
  }
  &__brand {
    font-family: "Road Rage";
    font-size: 50px;
    line-height: 1;
    margin: 0px 0px 20px 0px;
    @media (max-width: $bp2+px) {
      margin: 0;
    }
  }
  &__style {
    font-size: 30px;
  }
  &__hop {
    font-size: 30px;
  }
  &__malts {
    font-size: 20px;
  }
  &__alcohol {
    font-size: 18px;
  }
}
</style>