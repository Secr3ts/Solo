<template>
  <div class="wrapper">
    <appHeader style="position: fixed"></appHeader>
    <div class="section" style="height: 40px"></div>
    <inputField></inputField>
    <div class="container">
      <h5 class="center-align">Search on the widest Music Platform.</h5>
      <div class="section">
        <div class="divider" :style="{ 'background-color': scColor }"></div>
        <carousel class="carousel"></carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import InputField from './SearchPage/InputField'
import Carousel from './SearchPage/Carousel'

export default {
  name: 'search-page',
  components: {
    'appHeader': Header,
    'inputField': InputField,
    'carousel': Carousel
  },
  data () {
    return {
      scColor: this.$parent.scColor
    }
  }
}
</script>

<style>
  .carousel {
    position: relative;
    margin-top: 20px
  }

  body {
    overflow: hidden;
  }
</style>
