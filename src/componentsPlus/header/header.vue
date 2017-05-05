<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-row>
      <span class="wrapper pull-left">
          EUX Developer
      </span>
      <span class="wrapper pull-right">
        <el-button class="cell" type="warning"></el-button>
        <el-button class="cell" type="success"></el-button>
        <el-button class="cell" type="info"></el-button>
      </span>
    </el-row>
  </el-menu>
</template>

<script>
  export default {
    name: 'headerMenu'
  }
</script>

<style>
  .el-menu {
    border-radius: 0px !important;
  }

  .el-menu-demo{
    background: #324057;
  }

  .pull-left {
    font-size: 35px;
    font-weight: bold;
    min-height: 60px;
    line-height: 60px;
    margin-left: 20px;
    padding: 0px 10px;
  }

  .pull-right {
    float: right;
    min-height: 60px;
    line-height: 60px;
    padding: 0px 10px;
  }

  .cell {
    width: 50px;
    height: 36px;
    border-radius: 0px !important;
    box-shadow: 5px 5px 5px #888888;
  }
</style>
