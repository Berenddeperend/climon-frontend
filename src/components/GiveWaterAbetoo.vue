<template>
  <div class="wrapper">
    <!-- <div class="nes-container with-title"> -->
    <div class="nes-container">
      <!-- <h3 class="title">Berend's plantenbak</h3> -->
      <p class="tac">Berend's plantenbak</p>
      <div class="nes-container-inner">
        <button ref="water" class="nes-btn is-primary">Geef water</button>
      </div>
    
      <div class="nes-balloon from-left" v-if="temperature">
        <p>{{temperature}}°C</p>
      </div>
    </div>
  </div>
</template>

<script>

// import Vue from 'vue'


export default {
  data() {
    return {
      temperature: null
    }
  },
  methods: {
    giveWater() {
      console.log('give water.') //todo: throttle this method.
      
      this.abetooInstance.sendMessage(this.WemosAbetooId, "water", "-");
    }
  },
  mounted() {
    const self = this;
    let keepGivingWater; //becomes a function later

    const instacne = this.abetooInstance.init("-uLj2KEuibEGl0o5tfqauDA636307126198501918#0f82d535bd87d54e8ffd84cd518ecd2d3f90eb7e", callback);

    function callback(message) { 
      console.log('message: ', message);
      self.temperature = message;
    }

    function triggerGiveWater() {
      self.giveWater();
    }

    this.$refs.water.addEventListener('mousedown', () => {
      triggerGiveWater();
      keepGivingWater = setInterval(triggerGiveWater, 450);
    });

    document.addEventListener('mouseup', () => {
        clearInterval(keepGivingWater);
    });
  }


}
</script>

<style lang="scss">
  .wrapper {
    max-width: 300px;
    margin: 0 auto;
  }

  .tac {
    text-align: center;
  }

  .nes-container-inner {
    text-align: center;
  }

  .nes-container {
    position: relative;
    background: white;
  }

  .nes-balloon {
    top: -63px;
    right: -100px;
    position: absolute;

  }
</style>
