<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <db-selector></db-selector>
    <table-data></table-data>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DbSelector from './components/DbSelector.vue'
import TableData from './components/TableData.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    DbSelector,
    TableData
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
