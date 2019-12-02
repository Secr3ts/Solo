<template>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :active-text-color="scColor">
      <el-menu-item index="1" class="li-1 center-align">Solo</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Example</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4"><a href="https://github.com/Secr3ts/Solo" target="_blank" right>About Solo</a></el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'tool-bar',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      scColor: '#FF4400'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.li-1 {
  width: 100px
}
</style>
