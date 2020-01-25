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

import { scaleLinear } from 'd3-scale';

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
    this.setBackground();
    setInterval(this.setBackground, 10000)
  },
  methods: {
    setBackground() {
      console.log('setting bg');
      const hour = new Date().getHours();

      const backgrounds = [
        "01-Early-Morning.png",
        "02-Mid-Morning.png",
        "03-Late-Morning.png",
        "04-Early-Afternoon.png",
        "05-Mid-Afternoon.png",
        "06-Late-Afternoon.png",
        "07-Early-Evening.png",
        "08-Mid-Evening.png",
        "09-Late-Evening.png",
        "10-Early-Night.png",
        "11-Mid-Night.png",
        "12-Late-Night.png",
      ]

      const scale = scaleLinear()
        .domain([0, 23])
        .range([1, backgrounds.length])

      const targetBgIndex = Math.round(scale(hour));
      document.querySelector('html').style.backgroundImage = `url('./${backgrounds[targetBgIndex -1]}')`;
    }
  }
}
</script>

<style>

html {
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  /* background: url('./assets/07-Early-Evening.png') no-repeat center center fixed;  */
}

body {
  background: none;
}

#app {
  font-family: 'Press Start 2P', monospace;
  margin-top: 140px;
}
</style>
