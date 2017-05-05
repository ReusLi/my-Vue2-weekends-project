<template>
  <div class="treeDiv">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
  //  import treeJson from '../../json/doc/ecp.core.web.doc.json'
  import treeJson from '../../json/doc/tree.json'

  export default{
    name: 'tree',
    data () {
      return {
        data: treeJson,
        defaultProps: {
          children: 'children',
          label: 'caption'
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
