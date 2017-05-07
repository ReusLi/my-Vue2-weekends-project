<template>
  <div>
    <header-menu></header-menu>

    <!-- 左侧nav tree END -->
    <br/>
    <!-- 右侧textarea START -->
    <el-row>
      <el-col offset="2" class="col" :xs="14" :sm="14" :md="14" :lg="14">
        <el-row>
          <el-col :xs="4" :sm="4" :md="4" :lg="4">
            <el-card class="componentTitle">
              查询表格
            </el-card>
          </el-col>
        </el-row>

        <el-row>
          <el-row class="itemTitle">
            <h2>用例A</h2>
          </el-row>
          <el-row>
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </el-row>
        </el-row>

        <el-row>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="源代码" name="1">
              <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
      <span class="hljs-attr">plain</span>
      <span class="hljs-attr">@click</span>=<span class="hljs-string">"open7"</span>&gt;</span>
      偏移的消息
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  </code></pre></div>
            </el-collapse-item>
            <el-collapse-item title="试一试" name="2">
              <div>...</div>
            </el-collapse-item>
          </el-collapse>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import headerMenu from './componentsPlus/header/header.vue'
  import tableJson from './json/test-json/ele-table.json'

  export default {
    name: 'app',
    data () {
      return {
        tableData: tableJson
      }
    },
    components: {
      'header-menu': headerMenu
    },
    methods: {
    }
  }

</script>

<style>
  html, body, #app, .row, .col {
    width: 100%;
    height: 100%;
    margin: 0;
    /*overflow: hidden;*/
  }

  body {
    background-color: #FFFFFF;
    /*background-color: #324057;*/
  }

  .itemTitle {
    color: #475669;
    border-bottom: 5px solid #edf7ff;
    margin-bottom: 20px;
  }

  .componentTitle{
    background: #73ccff!important;
    color: #ffffff!important;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    border-radius: 0px!important;
    box-shadow: none!important;
  }

  .el-collapse{
    border: 0px!important;
  }
  .el-collapse-item{

  }
</style>
