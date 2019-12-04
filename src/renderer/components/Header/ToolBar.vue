<template>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      menu-trigger="click"
      @select="handleSelect"
      :active-text-color="scColor">
      <el-menu-item index="1" class="li-1 center-align">Solo</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Soundcloud</template>
        <el-menu-item index="2-1">Likes</el-menu-item>
        <el-menu-item index="2-2">Playlists</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">Account</template>
          <el-menu-item index="2-4-1">Your Profile</el-menu-item>
          <el-menu-item index="2-4-2" :style="{}"><a href="https://github.com/Secr3ts/Solo/issues">Report a Bug</a></el-menu-item>
          <el-menu-item index="2-4-3" :style="{ color: warnColor }">Logout</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4" @click="openURL('https://github.com/Secr3ts/Solo')">About Solo</el-menu-item>
    </el-menu>
</template>

<script>
import { shell } from 'electron'

export default {
  name: 'tool-bar',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      scColor: '#FF4400',
      warnColor: this.$parent.warnColor
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    openURL (url) {
      shell.openExternal(url)
    }
  }
}
</script>

<style>
.li-1 {
  width: 100px
}
</style>
