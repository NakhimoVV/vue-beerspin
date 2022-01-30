<template>
  <div class="page-user__box box-user">
    <div class="box-user__showhistory">
      <span class="icon-history"></span>
    </div>
    <div class="box-user__userchange">
      <a href="#" id="userChange">Change User</a>
    </div>
    <div class="box-user__useravatar">
      <span class="icon-user-circle"></span>
    </div>
    <div class="box-user__username">maria.cormier</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.box-user {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: $bp2+px) {
    flex-direction: row;
    justify-content: flex-start;
  }

  &__showhistory {
    display: none;
    @media (max-width: $bp2+px) {
      display: block;
      position: absolute;
      bottom: 3px;
      right: 8px;
      cursor: pointer;
      z-index: 2;
    }
  }
  &__userchange {
    position: absolute;
    top: 0;
    right: 100%;
    transform: translateX(100%);
    a {
      color: rgba(252, 219, 15, 0.5);
    }
    a:hover {
      color: rgba(252, 219, 15, 1);
    }
    @media (max-width: $bp2+px) {
      right: 0;
      transform: translateX(0);
    }
  }
  &__username {
    font-size: calc(25px + (40 - 25) * ((100vw - 320px) / (1600 - 320)));
    @media (max-width: $bp2+px) {
      margin-left: calc(20px + (40 - 20) * ((100vw - 320px) / (1600 - 320)));
    }
  }
}
.icon-history {
  color: #fcdb0f;
  font-size: calc(35px + (100 - 35) * ((100vw - 320px) / (1600 - 320)));
}
.icon-user-circle {
  color: #fcdb0f;
  font-size: calc(40px + (150 - 40) * ((100vw - 320px) / (1600 - 320)));
}
</style>