<template>
  <div class="user-history__row">
    <div class="beer__brand">{{ beer.brand }}</div>
    <div class="beer__name">{{ beer.name }}</div>
    <div class="beer__ibu">{{ beer.ibu }}</div>
    <div class="beer__alcohol">{{ beer.alcohol }}</div>
  </div>
</template>

<script>
export default {
  props: {
    beer: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>