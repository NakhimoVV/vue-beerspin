<template>
  <section class="page-beer">
    <div class="page-beer__img">
      <img
        :src="
          SPIN_STATE_2 === true
            ? require('../assets/img/beerspin-c.png')
            : require('../assets/img/barrel.png')
        "
        alt="изображение пива"
        :class="{
          shaking: SPIN_STATE_1 === true,
          showingbeer: SPIN_STATE_2 === true,
        }"
      />
    </div>
    <CardBeer />
    <Buttons />
  </section>
</template>

<script>
import CardBeer from "@/components/pagebeer-boxes/CardBeer";
import Buttons from "@/components/UI/Buttons";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { CardBeer, Buttons },
  computed: {
    ...mapGetters(["SPIN_STATE_1", "SPIN_STATE_2"]),
  },
};
</script>

<style lang="scss">
.page-beer {
  height: inherit;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1.4fr 1.4fr 0.2fr;
  padding: 15px;
  row-gap: 15px;
  overflow: hidden;
  @media (max-width: $bp2+px) {
    grid-template-rows: 1.5fr 0.5fr;
    height: 100%;
  }
  @media (max-width: $bp3+px) {
    row-gap: 5px;
  }
  &__img {
    grid-column: span 2;
    position: relative;
    @media (max-width: $bp2+px) {
      grid-column: auto;
    }
    @media (max-width: $bp3+px) {
      grid-column: span 2;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__card {
    grid-column: span 2;
    align-self: start;
    @media (max-width: $bp2+px) {
      grid-column: auto;
      align-self: center;
    }
    @media (max-width: $bp3+px) {
      grid-column: span 2;
    }
  }

  &__btns {
    grid-column: span 2;
    justify-self: center;
    align-self: center;
  }
}
</style>