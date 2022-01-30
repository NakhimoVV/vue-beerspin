<template>
  <div class="page-beer__btns">
    <button class="btn"><span>spin</span></button>
    <button class="btn"><span>accept</span></button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
button:not(:last-child) {
  margin-right: 5px;
}
.btn {
  color: #292828;
  padding: 0px 30px;
  font-size: calc(30px + (40 - 30) * ((100vw - 320px) / (1600 - 320)));
  border-radius: 10px;
  background: #fcdb0f;
  transition: box-shadow 0.8s ease-in 0s;
  &:hover {
    box-shadow: 9px 9px 21px #f08e2e, -9px -9px 21px #fffc11;
    @media (max-width: $bp2+px) {
      box-shadow: none;
    }
  }
  &:active {
    transform: translateY(1px);
  }
}
</style>