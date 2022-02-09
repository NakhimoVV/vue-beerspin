<template>
  <div
    class="page-user__history user-history"
    :class="{ showinghistory: HISTORY.length }"
  >
    <div class="user-history__title">
      Сhoice history
      <div
        :class="{ cleanhistory: true, showclean: HISTORY.length }"
        @click="delAllHistory"
      >
        <span class="icon-clean"></span>
      </div>
    </div>
    <div class="user-history__border">
      <ListHistory v-for="row in HISTORY" :key="row.name" :beer="row" />
    </div>
    <div class="page-user__showmobile">
      <div class="page-user__showmobile-wrap">
        <div class="cleanhistory">
          <span class="icon-clean"></span>
        </div>
        <div class="user-history__border">
          <ListHistory v-for="row in HISTORY" :key="row.name" :beer="row" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListHistory from "@/components/pageuser-boxes/ListHistory";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { ListHistory },
  computed: {
    ...mapGetters(["HISTORY"]),
  },
  methods: {
    ...mapActions(["DELETE_HISTORY"]),

    delAllHistory() {
      this.DELETE_HISTORY();
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.user-history {
  @media (max-width: $bp2+px) {
    display: none;
  }
  display: grid;
  grid-template-rows: auto 1fr;
  border: 2px solid #fcdb0f;
  border-radius: 20px;
  align-self: flex-start;
  transition: box-shadow 0.8s ease-in-out 0s;
  &:hover {
    box-shadow: 9px 9px 21px #f08e2e, -9px -9px 21px #fffc11;
  }
  &__title {
    font-family: "Road Rage";
    font-size: 60px;
    line-height: 1;
    text-align: center;
    position: relative;
  }
  &__border {
    border-top: 2px solid #fcdb0f;
    padding: 15px 25px;
    overflow: auto;
    display: grid;
    row-gap: 10px;
    align-content: start;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    & {
      overflow: -moz-scrollbars-none;
    }
    & {
      -ms-overflow-style: none;
    }
    @media (max-width: $bp2+px) {
      padding: 0;
      border: none;
      color: rgba(123, 255, 0, 0.781);
      font-weight: 700;
      height: inherit;
    }
  }
  &__row {
    border-bottom: 1px solid #fffc11;
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr 0.5fr;
    justify-items: center;
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