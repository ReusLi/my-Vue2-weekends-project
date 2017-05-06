<template>
  <div>
    <el-row class="row">
      <!-- 左侧nav tree START -->
      <header-menu></header-menu>
      <el-col class="col" :xs="4" :sm="4" :md="4" :lg="4">
        <tree v-on:add="renderTreeItem"></tree>
      </el-col>

      <!-- 左侧nav tree END -->

      <!-- 右侧textarea START -->

      <el-col offset="1" class="col" :xs="17" :sm="17" :md="17" :lg="17">
        <item-frame :frameData="treeItemData" ref="itemFrame"></item-frame>
      </el-col>
      <!-- 右侧textarea END -->
    </el-row>
  </div>
</template>

<script>
  import headerMenu from './componentsPlus/header/header.vue'
  import tree from './componentsPlus/tree/tree.vue'
  import itemFrame from './componentsPlus/treeItems/itemFrame.vue'

  export default {
    name: 'app',
    data () {
      return {
        treeItemData: {}
      }
    },
    components: {
      'header-menu': headerMenu,
      'tree': tree,
      'item-frame': itemFrame
    },
    methods: {
      renderTreeItem: function (data) {
        console.log(data)
        var tmpData = {
          child: []
        }
        if (typeof data.children === 'undefined') {
          tmpData.child.push(data)
        } else {
          tmpData = data
          tmpData.child = data.children
        }
        this.treeItemData = tmpData
//        console.log(this.treeItemData)
      }
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
    /*overflow: hidden;*/
  }

  body {
    background-color: #FFFFFF;
    /*background-color: #324057;*/
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
