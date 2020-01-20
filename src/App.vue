<template>
  <div id="app">
    <!-- <give-water></give-water> -->
    <give-water-abetoo></give-water-abetoo>
    <!-- <abetoo></abetoo> -->
    <!-- <temperature></temperature> -->
    <!-- <db-selector></db-selector>
    <table-data></table-data> -->
  </div>
</template>

<script>
import DbSelector from './components/DbSelector.vue'
import TableData from './components/TableData.vue'
import GiveWater from './components/GiveWater.vue'
import GiveWaterAbetoo from './components/GiveWaterAbetoo.vue'
import Abetoo from './components/Abetoo.vue'
import PlantGraph from './components/PlantGraph.vue'
import Temperature from './components/Temperature.vue'

export default {
  name: 'app',
  components: {
    DbSelector,
    TableData,
    GiveWater,
    GiveWaterAbetoo,
    PlantGraph,
    Temperature,
    Abetoo
  },
  mounted() {
  }
}
</script>

<style>

html {
  background: url('./assets/07-Early-Evening.png') no-repeat center center fixed; 
  background-size: cover;
}

body {
  background: none;
}

#app {
  font-family: 'Press Start 2P', monospace;
  margin-top: 140px;
}
</style>
