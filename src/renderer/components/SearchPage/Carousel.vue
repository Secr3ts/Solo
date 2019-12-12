<template>
  <div class="wrapper">
    <div class="container">
      <div class="carousel-container">
        <el-carousel :interval="3000" type="card" :height="{ coverSize }">
          <el-carousel-item><img src="./assets/bones-noize_undead.jpg" alt="Bones Noize Undead Cover"></el-carousel-item>
          <el-carousel-item><img src="" alt=""></el-carousel-item>
          <el-carousel-item><img src="" alt=""></el-carousel-item>
          <el-carousel-item><img src="" alt=""></el-carousel-item>
          <el-carousel-item><img src="" alt=""></el-carousel-item>
          <el-carousel-item><img src="" alt=""></el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui'
import { setId, getTrack } from './Carousel/api'

export default {
  name: 'carousel',
  data () {
    return {
      coverSize: '500px',
      sid: 'Vu5tlmvC9eCLFZkxXG32N1yQMfDSAPAA'
    }
  },
  components: {
    'el-carousel': Carousel,
    'el-carousel-item': CarouselItem
  },
  mounted () {
    setId(this.$data.sid)
    getTrack('582888273')
  }
}
</script>

<style>

</style>