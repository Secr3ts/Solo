<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

export default {
  name: 'solo',
  components: {
    simplebar
  },
  data () {
    return {
      scColor: '#FF4400',
      warnColor: '#f44336'
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }
</style>
