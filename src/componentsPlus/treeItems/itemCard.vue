<template>
    <el-card class="box-card myCard" @click.native="showDetailPage">
      {{colData.caption}}
    </el-card>
</template>

<script>
  // import from './'

  export default {
    name: 'itemCard',
    props: [
      'colData'
    ],
    methods: {
      showDetailPage () {
        window.location.href = 'detail.html'
      }
    }
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
    line-height: 40px;
    font-size: 20px;
  }

  .myCard:hover{
    /*box-shadow: 5px 5px 5px black!important;*/
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  }
</style>
