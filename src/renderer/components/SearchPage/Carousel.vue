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

export default {
  name: 'carousel',
  data() {
    return {
      coverSize: '500px',
      covers: [
        {
          img: ''
        }
      ]
    }
  },
}
</script>

<style>

</style>