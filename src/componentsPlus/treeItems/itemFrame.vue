<template>
  <table class="itemTable">
    <tbody>
      <tr v-for="rowData in frameData.child" class="itemTr">
        <itemRow :rowData="rowData"></itemRow>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import itemRow from './itemRow.vue'

  export default {
    name: 'itemFrame',
    props: [
      'frameData'
    ],
    data () {
      return {
      }
    },
    components: {
      'itemRow': itemRow
    }
  }

</script>

<style>
  .itemTr {
    width: 48px;
    height: 300px;
    /*background: red;*/
  }
  .itemTable{
    width: 100%;
    height: 100%;
  }
</style>
