<template>
  <div class="wrapper">
    <appHeader></appHeader>
    <inputField></inputField>
    <div class="container">
      <h4 class="center-align">Search on the widest Music Platform.</h4>
      <div class="section">
        <div class="divider" :style="{ 'background-color': scColor }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import InputField from './SearchPage/InputField'

export default {
  name: 'search-page',
  components: {
    'appHeader': Header,
    'inputField': InputField
  },
  data () {
    return {
      scColor: this.$parent.scColor
    }
  }
}
</script>

<style>
</style>
