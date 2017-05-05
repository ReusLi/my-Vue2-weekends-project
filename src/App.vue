<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <el-row class="row">
      <!-- 左侧nav tree START -->

      <el-col class="col" :xs="4" :sm="4" :md="4" :lg="4">
        <nav-tree></nav-tree>
      </el-col>

      <!-- 左侧nav tree END -->

      <!-- 右侧textarea START -->

      <el-col class="col col-note-text" :xs="13" :sm="13" :md="13" :lg="13">
        <note-text></note-text>
      </el-col>

      <el-col class="col col-note-text" :xs="6" :sm="6" :md="6" :lg="6">
      </el-col>

      <!-- 右侧textarea END -->
    </el-row>

  </div>
</template>

<script>
  import List from './components/lists/List'
  import Carousel from './components/carousel/carousel'
  import navTree from './components/navTree/nav-tree.vue'
  import noteText from './components/noteText/note-text.vue'

  export default {
    name: 'app',
    components: {
      'list': List,
      'carousel': Carousel,
      'nav-tree': navTree,
      'note-text': noteText
    }
  }
</script>

<style>
  /*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
  html, body, #app, .row, .col {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    background-color: #475669;
  }

  .col {
    background-color: #324057;
    height: 97%;
    /*left: 10px;*/
    border: 1px solid #EFF2F7;
    -webkit-box-shadow: 1px 1px 1px;
    -moz-box-shadow: 1px 1px 1px;
    box-shadow: 1px 1px 1px;
  }

  .col-note-text {
    margin-left: 20px;
  }
</style>
