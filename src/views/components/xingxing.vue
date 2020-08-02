<template>
  <div class="rate primary-color">
    <div class="no-high-light">☆☆☆☆☆</div>
    <div class="high-light" :style="{width: highLightWidth}">★★★★★</div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: [Number, String],
        default: 0,
      },
    },
    computed: {
      highLightWidth () {
        return `${(this.value / 2).toFixed(1)}em`;
      }
    },
  }
</script>

<style lang="scss" scoped>
.rate {
  position: relative;
  .high-light {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    color:#00848A
  }
}
</style>