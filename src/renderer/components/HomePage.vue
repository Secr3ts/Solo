<template>
	<div class="wrapper">
    <tool-bar></tool-bar>
    <div class="container">
      <h1 class="center">Welcome to Solo</h1>
			<div class="divider divider-sc" id="fDivider"></div>
      <div class="logo-wrapper">
        <logoHome></logoHome>
      </div>
      <div class="link-wrapper">
        <linkPage></linkPage>
      </div>
		</div>
	</div>
</template>

<script>
import LogoHome from './HomePage/LogoHome'
import LinkPage from './HomePage/LinkPage'
import ToolBar from './ToolBar'

export default {
  name: 'home-page',
  data () {
    return {
      platform: process.platform
    }
  },
  methods: {
    setSDwidth () {
      return null
    }
  },
  components: {
    'logoHome': LogoHome,
    'linkPage': LinkPage,
    'toolBar': ToolBar
  },
  mounted () {
    console.log(this.$router.currentRoute)
  }
}
</script>

<style lang="css" scoped>
  h1 { color: #001627; }

  div.divider-sc { background-color: #FF4400; }
</style>
