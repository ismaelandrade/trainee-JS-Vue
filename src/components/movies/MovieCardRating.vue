<template>
  <div v-if="rating>=0" class="rating-average">
    <p class="rating-text">{{percentage}}%</p>
    <div class="rating-positive-circle"
      :style="votesCircleStyle"></div>
  </div>
</template>
<script>
export default {
  props: {
    rating: {
      type: Number,
      default: -1
    }
  },
  computed: {
    percentage () {
      return this.rating * 10
    },
    votesCircleStyle () {
      const scale = this.rating / 10
      return `transform: scale(${scale});`
    }
  }
}
</script>
<style scoped>
  .rating-average {
    float: left;
    text-align: center;
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: rgba(204, 90, 113, 0.7);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding-top: 12px;
  }
  .rating-text {
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .rating-positive-circle{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #00BD9D;
    box-shadow: 0 0 2px 2px rgba(0, 189, 157, 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }
</style>