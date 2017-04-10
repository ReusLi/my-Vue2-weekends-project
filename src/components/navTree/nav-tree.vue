<!-- Created by reusli on 2017/4/9. -->

<template>
  <div>
    <el-tree class="nav-tree" :data="curTreeJson" :props="defaultProps" :highlight-current="true"
             @node-click="handleNodeClick"></el-tree>
    <el-input class="nav-input" v-model="inputValue"
              @keyup.enter.native="inputEnter"></el-input>
  </div>
</template>

<script>
  var treeJson = require('../../json/nav-tree/tree.json')

  export default {
    name: 'navTree',
    data () {
      return {
        data: treeJson,
        defaultProps: {
          label: 'label'
//          children: 'children'
        },
        inputValue: '',
        curTreeJson: []
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      },
      inputEnter () {
        if (this.inputValue !== '') {
          this.curTreeJson.push({'label': this.inputValue})
          this.inputValue = ''
        }
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
  .nav-input{
    margin-top: 20px;
  }

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
