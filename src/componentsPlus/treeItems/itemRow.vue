<template>
  <div>
  <el-row>
    <el-row class="itemTitle">
      <h2>{{rowData.caption}}</h2>
    </el-row>
    <el-row>
      <el-col v-for="colData in rowData.items" class="itemCol" offset="1" :xs="6" :sm="6" :md="6" :lg="6">
        <item-card :colData="colData"></item-card>
      </el-col>
    </el-row>
  </el-row>
  </div>
</template>

<script>
  import itemCard from './itemCard.vue'

  export default {
    name: 'itemRow',
    props: [
      'rowData'
    ],
    components: {
      'item-card': itemCard
    }
  }

</script>

<style>
  .item-panel {
    width: 100%;
    height: 100%;
    /*background: red;*/
  }

  .itemTitle {
    color: #475669;
    border-bottom: 5px solid #D3DCE6;
    margin-bottom: 20px;
  }

</style>
