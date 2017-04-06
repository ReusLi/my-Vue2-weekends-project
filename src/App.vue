
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <List></List>
  </div>
</template>

<script>
  import List from './components/lists/List'

  export default {
    name: 'app',
    components: {
      List
    }
  }
</script>

<style>
  /*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
  body{
    background-color: #324057;
    width: 100%;
    height: 100%;
  }
</style>
