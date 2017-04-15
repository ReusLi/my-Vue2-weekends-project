<!-- Created by reusli on 2017/4/9. -->

<template>
  <div>
    <el-tree class="nav-tree"
             node-key="id"
             :data="treeData"
             :props="defaultProps"
             :highlight-current="true"
             :render-content="renderContent">
    </el-tree>
    <el-input class="nav-input" v-model="inputValue"
              ref='search'
              autofocus
              placeholder='输入tree内容'
              @keyup.enter.native="inputEnter"
              ></el-input>
  </div>
</template>
<script>
//  var treeJson = require('../../json/nav-tree/tree.json')

  export default {
    name: 'navTree',
    data () {
      return {
//        data: treeJson,
        defaultProps: {
          label: 'label',
          children: 'children'
        },
        inputValue: '',
        treeData: [],
        id: 1
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      },
      inputEnter () {
        if (this.inputValue !== '') {
          this.treeData.push({
            'id': this.id++,
            'label': this.inputValue,
            'children': []
          })
          this.inputValue = ''
        }
      },

      append (node, store, data) {
        data.children.push({ id: this.id++, label: 'id' + this.id, children: [] })
//        store.append({ id: this.id++, label: 'id' + this.id, children: [] }, data)
        console.group('appends' + data.label)
        console.log(store)
        console.groupEnd()
        this.treeData = store.root.store.data
      },

      remove (node, store, data) {
        store.remove(data)
        console.group('remove' + data.label)
        console.log(store)
        console.log(data)
        console.log(node)
        console.groupEnd()
        this.treeData = store.root.store.data
      },

      renderContent (h, { node, data, store }) {
//        console.group('append' + data.label)
//        console.log(node)
//        console.log(data)
//        console.log(store)
//        console.groupEnd()
        return (
          <span>
          <span>
          <span>{node.label}</span>
          </span>
          <span style="float: right; margin-right: 20px">
            <el-button size="mini" on-click={ () => this.append(node, store, data) }>Append</el-button>
            <el-button size="mini" on-click={ () => this.remove(node, store, data) }>Delete</el-button>
          </span>
          </span>)
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
