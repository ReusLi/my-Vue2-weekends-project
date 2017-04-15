<!-- Created by reusli on 2017/4/9. -->

<template>
  <div class="componentMain">
    <el-row v-for="i in 2">
      <el-col class="cardCol"
              :span="6" v-for="(o, index) in 3"
              :offset="index > 0 ? 3 : 0"
      >
        <el-card :body-style="{ padding: '0px' }"
                 class="cardCode">
          <div style="padding: 14px;">
            <span>编码代码</span>
            <div class="bottom clearfix">
              <span class="time">2017-04-16 00:00</span>
              <el-button type="text" class="button">详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElRow from '../../../node_modules/element-ui/packages/row/src/row'
  // import from './'

  export default {
    components: {ElRow},
    name: 'note-text',
    data () {
      return {
        currentDate: new Date()
      }
    }
  }

</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .cardCol {
    margin-bottom: 20px;
  }

  .cardCode {
    background-color: #475669;
  }

  .clearfix span, .cardCode {
    color: #ffffff;
  }

  .componentMain {
    /*background-color: #tr;*/
  }
</style>
