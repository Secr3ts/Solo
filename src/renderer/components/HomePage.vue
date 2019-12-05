<template>
	<div class="wrapper">
    <appHeader></appHeader>
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
import Header from './Header'

export default {
  name: 'home-page',
  data () {
    return {
      warnColor: this.$parent.warnColor
    }
  },
  methods: {
  },
  components: {
    'logoHome': LogoHome,
    'linkPage': LinkPage,
    'appHeader': Header
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
