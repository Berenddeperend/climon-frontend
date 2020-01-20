<template>
  <div class="wrapper">
    <div class="nes-container with-title">
      <h3 class="title">Berend's temperatuur</h3>

      <p class="tac" v-if="temp">{{temp}} °C</p>
      <p class="tac" v-else>Waiting for data...</p>

    </div>
  </div>
</template>

<script>
export default {

  
data() {
  return {
    temp: null,
  }
},
mounted() {
  const self = this;

  this.abetooInstance.init("-uLj2KEuibEGl0o5tfqauDA636307126198501918#0f82d535bd87d54e8ffd84cd518ecd2d3f90eb7e", callback);
  function callback(newmessage) {
    self.temp = newmessage
  }

  // window.setInterval(()=> {
  //   const doSendMessage = abetoo.sendMessage("-V898dmJStk-FIgeLCMbfhQ636307126199562031#970e53896952cb6fe023a0858025509fbc896d63", "vanaf js", "-");
  //   // const doSendMessage = abetoo.sendMessage("-uLj2KEuibEGl0o5tfqauDA636307126198501918#0f82d535bd87d54e8ffd84cd518ecd2d3f90eb7e", "vanaf js", "-");
  //   console.log('doSendMessage: ', doSendMessage);
  // }, 1000);
}



}
</script>

<style>

</style>
