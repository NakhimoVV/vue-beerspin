<template>
  <section class="page-user">
    <BoxUser />
    <BoxHistory />
    <div
      class="page-user__showmobile"
      :class="{ active: MOB_HISTORY === false }"
    >
      <div class="page-user__showmobile-wrap">
        <div class="cleanhistory" @click="delAllHistory">
          <span class="icon-clean"></span>
        </div>
        <div class="user-history__border">
          <ListHistory v-for="row in HISTORY" :key="row.name" :beer="row" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BoxUser from "@/components/pageuser-boxes/BoxUser";
import BoxHistory from "@/components/pageuser-boxes/BoxHistory";
import ListHistory from "@/components/pageuser-boxes/ListHistory";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { BoxUser, BoxHistory, ListHistory },
  computed: {
    ...mapGetters(["HISTORY", "MOB_HISTORY"]),
  },
  methods: {
    ...mapActions(["DELETE_HISTORY"]),
    delAllHistory() {
      this.DELETE_HISTORY();
    },
  },
};
</script>

<style lang="scss">
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
//=================================================================
.icon-clean {
  color: #fcdb0f;
  font-size: calc(35px + (100 - 35) * ((100vw - 320px) / (1600 - 320)));
  @media (min-width: $bp2+px) {
    font-size: 30px;
  }
}
.cleanhistory {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, -10%);
  z-index: 2;
  cursor: pointer;
  @media (max-width: $bp2+px) {
    display: block;
    right: 50%;
    transform: translate(50%, -120%);
  }
}
.page-user__showmobile-wrap {
  position: relative;
}
.showclean {
  display: block;
}
</style>