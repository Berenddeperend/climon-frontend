<template>
  <div class="wrapper">
    <div class="nes-container with-title">
      <h3 class="title">Berend's plantenbak</h3>

      <p class="tac">Blijf de knop ingedrukt houden.</p>

      <div class="nes-container-inner">
        <button ref="water" class="nes-btn is-primary">Geef water.</button>
      </div>
    </div>
  </div>
</template>

<script>

// import Vue from 'vue'


export default {
  methods: {
    giveWater() {
      console.log('give water.') //todo: throttle this method.

      // fetch(this.URL + "/give-water");
      fetch(this.WemosURL);
    }
  },
  mounted() {
    const self = this;
    console.log(this.URL);
    let keepGivingWater; //becomes a function later


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
    width: 600px;
    margin: 0 auto;
  }

  .tac {
    text-align: center;
  }

  .nes-container-inner {
    text-align: center;
  }
</style>
