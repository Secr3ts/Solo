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

// TODO
/* Find a decent way to implement breadcrumb */
</script>

<style>
  .router-breadcrumb {
      font-size: 14px;
  }
</style>