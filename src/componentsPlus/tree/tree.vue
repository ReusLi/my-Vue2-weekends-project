<template>
  <div class="treeDiv">
    <el-tree :data="treeData" :props="defaultProps" @node-click="treeItemClick"></el-tree>
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
        this.$emit('add', data)
      }
    }
  }
</script>

<style>
  .el-tree {
    height:1000px;
  }

  .treeDiv {
    background: #D3DCE6;
    height: 1000px;
    padding: 10px;
    border: 1px solid #ffffff;
    /*overflow-y: scroll;*/
  }
</style>
