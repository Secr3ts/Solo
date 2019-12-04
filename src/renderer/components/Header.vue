<template>
  <div class="wrapper">
    <toolBar></toolBar>
    <breadCrumb></breadCrumb>
  </div>
</template>

<script>
import ToolBar from './Header/ToolBar'
import BreadCrumb from './Header/BreadCrumb'

export default {
  name: 'headerPage',
  components: {
    'toolBar': ToolBar,
    'breadCrumb': BreadCrumb
  }
}
</script>

<style>
</style>
