<template>
  <div class="wrapper center-align">
    <el-button 
      type="primary" 
      round 
      class="batButton pulse"
      @click="sClick"
    >
      Start
    </el-button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import chalk from 'chalk'

export default {
  name: 'link-page',
  methods: {
    sClick: function () {
      this.$emit('elClicked')
      this.$router.push('search-page')
    }
  },
  computed: {
    example () {
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./settings.scss";
  @import "~element-ui/packages/theme-chalk/src/button";
  @import "~element-ui/packages/theme-chalk/src/button-group";
  .batButton { width: 125px; }
</style>
