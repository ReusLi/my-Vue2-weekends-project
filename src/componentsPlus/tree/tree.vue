<template>
  <div class="treeDiv">
    <el-tree :data="treeData"
             :props="defaultProps"
             :highlight-current="true"
             @node-click="treeItemClick"></el-tree>
  </div>
</template>

<script>
  //  import treeJson from '../../json/doc/ecp.core.web.doc.json'
  import treeJson from '../../json/doc/tree.json'

  export default{
    name: 'tree',
    data () {
      return {
        treeData: treeJson,
        defaultProps: {
          children: 'children',
          label: 'caption'
        }
      }
    },
    methods: {
      treeItemClick (data) {
        var hasChild = true
        if (typeof data.children === 'undefined') {
          hasChild = false
        }
        this.$emit('add', data, hasChild)
      }
    }
  }
</script>

<style>
  .el-tree {
    height:1000px;
  }

  .el-tree-node__content:hover {
    background: #edf7ff;
  }

  .el-tree {
    background: #D3DCE6;
    height: 1000px;
    /*padding: 10px;*/
    border: 0px!important;
    border-right: 1px solid #eef1f6!important;
    /*overflow-y: scroll;*/
  }
</style>
