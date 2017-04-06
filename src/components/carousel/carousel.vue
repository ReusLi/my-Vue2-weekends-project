<template>
  <el-carousel :interval="2000" type="card" class="carousel-div" height="400px" width="600px">
    <el-carousel-item v-for="item in items">
      <img :src="item.path" class="carousel-img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: 'Carousel',
    data () {
      return {
        items: [{
          path: require('../../images/img1.png')
        }, {
          path: require('../../images/img2.png')
        }, {
          path: require('../../images/img3.png')
        }]
      }
    }
  }
</script>

<style>
  .carousel-div{
    margin-top: 5%;
  }
  .carousel-img{
    width: 100%;
    height: 100%;
  }
</style>
