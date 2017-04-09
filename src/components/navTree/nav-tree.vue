<!-- Created by reusli on 2017/4/9. -->

<template>
  <el-tree class="nav-tree" :data="data" :props="defaultProps" :highlight-current="true"
           @node-click="handleNodeClick"></el-tree>
</template>

<script>
  //  import json from '../../json/navTree/tree'

  export default {
    name: 'navTree',
    data () {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
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
