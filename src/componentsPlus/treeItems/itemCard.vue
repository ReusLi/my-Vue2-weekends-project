<template>
    <el-card class="box-card myCard">
      {{colData.caption}}
    </el-card>
</template>

<script>
  // import from './'

  export default {
    name: 'itemCard',
    props: [
      'colData'
    ]
  }

</script>

<style>
  .itemCol{
    margin-bottom: 20px;
  }

  .myCard{
    width: 200px;
    height: 100px;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    border-radius: 0px!important;
  }
</style>
