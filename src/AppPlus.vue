<template>
  <div>
    <el-row class="row">
      <!-- 左侧nav tree START -->
      <header-menu></header-menu>
      <el-col class="col" :xs="4" :sm="4" :md="4" :lg="4">
        <tree></tree>
      </el-col>

      <!-- 左侧nav tree END -->

      <!-- 右侧textarea START -->

      <el-col class="col" :xs="17" :sm="17" :md="17" :lg="17">

      </el-col>
      <!-- 右侧textarea END -->
    </el-row>
  </div>
</template>

<script>
  import headerMenu from './componentsPlus/header/header.vue'
  import tree from './componentsPlus/tree/tree.vue'

  export default {
    name: 'app',
    components: {
      'tree': tree,
      'header-menu': headerMenu
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
    margin: 0;
    overflow: hidden;
  }

  body {
    background-color: #324057;
  }


  /*
    .col {
      background-color: #324057;
      height: 97%;
      !*left: 10px;*!
      border: 1px solid #EFF2F7;
      -webkit-box-shadow: 1px 1px 1px;
      -moz-box-shadow: 1px 1px 1px;
      box-shadow: 1px 1px 1px;
    }

    .col-note-text {
      margin-left: 20px;
    }*/
</style>
