<!-- Created by reusli on 2017/4/9. -->

<template>
  <el-tree class="nav-tree" :data="data" :props="defaultProps" :highlight-current="true"
           @node-click="handleNodeClick"></el-tree>
</template>

<script>
  var treeJson = require('../../json/nav-tree/tree.json')

  export default {
    name: 'navTree',
    data () {
      return {
        data: treeJson,
        defaultProps: {
          label: 'label',
          children: 'children'
        }
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      }
    }
  }

</script>

<style scoped>
  .nav-tree {
    color: #ffffff;
    background-color: #324057;
    border: none;
  }
</style>

<style>
  .el-tree-node:hover {
    background-color: transparent;
    border: none;
  }

  .el-tree-node__content:hover {
    background-color: #475669 !important;
  }

  .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background-color: #475669 !important;
  }

</style>
