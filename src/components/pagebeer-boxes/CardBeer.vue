<template>
  <div class="page-beer__card card-beer">
    <p class="card-beer__name">Hercules Double IPA</p>
    <p class="card-beer__brand">Coors lite</p>
    <p class="card-beer__style">Porter</p>
    <p class="card-beer__hop">Horizon</p>
    <p class="card-beer__malts">Chocolate</p>
    <p class="card-beer__alcohol">3.5%</p>
    <p class="card-beer__ibu">18 IBU</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
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