<template>
  <div class="wrapper">
    <el-breadcrumb separator="/" class="router-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/search-page' }">Search Page</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'bread-crumb',
  data () {
    return {
      'null': null
    }
  }
}
</script>

<style>
  .router-breadcrumb {
      font-size: 14px;
  }
</style>