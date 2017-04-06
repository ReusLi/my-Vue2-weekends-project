<template>
  <el-row :gutter="10">
    <el-col :xs="8" :sm="8" :md="8" :lg="8">
      <div class="main-list">
        <el-card v-for="card in cards" class="box-card">
          {{card}}


        </el-card>
      </div>
    </el-col>

    <el-col :xs="8" :sm="8" :md="8" :lg="8">
      <div class="main-area">
        <el-input
          class="main-area-input"
          placeholder="请输入内容"
          @keyup.enter.native="pushCards"
          v-model="area"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import ListItem from './List-item'

  export default {
    name: 'List',
    components: {
      ListItem
    },
    data () {
      return {
        area: '',
        cards: []
      }
    },
    methods: {
      pushCards: function () {
        if (this.area === '') {
          return
        }
        this.cards.push(this.area)
        this.area = ''
      }
    }
  }
</script>

<style scoped>
  .main-list {
    border: 1px solid #E5E9F2;
    /*background-color: #13CE66;*/
    /*opacity: .5;*/
    height: 600px;
    padding: 0 10%;
  }

  .main-area {
    border: 1px solid #E5E9F2;
    opacity: .8;
    height: 600px;
    padding: 0 10%;
  }

  .main-area-input {
    min-height: 36px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #E5E9F2;
    margin-top: 30%;
  }

  .box-card {
    margin-top: 10%;
    background-color: #475669;
    color: #ffffff;
  }
</style>
