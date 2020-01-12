<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <give-water></give-water> -->
    <!-- <abetoo></abetoo> -->
    <!-- <temperature></temperature> -->
    <!-- <db-selector></db-selector>
    <table-data></table-data> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DbSelector from './components/DbSelector.vue'
import TableData from './components/TableData.vue'
import GiveWater from './components/GiveWater.vue'
import Abetoo from './components/Abetoo.vue'
import PlantGraph from './components/PlantGraph.vue'
import Temperature from './components/Temperature.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    DbSelector,
    TableData,
    GiveWater,
    PlantGraph,
    Temperature,
    Abetoo
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style>

#app {
  font-family: 'Press Start 2P', monospace;
  margin-top: 60px;
}
</style>
