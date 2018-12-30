<template>
<div>
  <ul>
    <h3>collections:</h3>
    <li v-for="collection in collections"
        @click="selectCollection(collection)"
        :key="collection"
        :class="{'active': selectedCollection == collection}"
        >{{collection}}</li>
  </ul>

  <ul>
    <h3>measurements:</h3>
    <li v-for="measurement in measurements"
        @click="selectMeasurement(measurement)"
        :key="measurement"
        :class="{'active': selectedMeasurement == measurement}"
        >{{measurement}}</li>
  </ul>
</div>  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "DbSelector",
  data() {
    return {
      collections: null,
      selectedCollection: null,
      measurements: null,
      selectedMeasurement: null,
    }
  },
  mounted() {
    this.getCollections();
  },
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    selectCollection(collection) {
      this.selectedCollection = collection;
      this.getMeasurements(collection)
    },
    selectMeasurement(measurement) {
      this.selectedMeasurement = measurement;
      this.getAllFromMeasurement(this.selectedCollection, measurement);
    },
    getCollections() {
  	  fetch(`${this.URL}/api/collections`)
        .then(res => res.json())
        .then(json => {
	        this.collections = json;
        });
    },
    getMeasurements(collection) {
      fetch(`${this.URL}/api/${collection}/measurements`)
        .then(res => res.json())
        .then(json => {
	        this.measurements = json;
        });
    },
    getAllFromMeasurement(collection, measurement) {
      fetch(`${this.URL}/api/${collection}/query`, {
        headers: {
          "query": `SELECT * FROM ${measurement}`
        }
      })
        .then(res => res.json())
        .then(json => {
	        this.$store.commit('setData', json);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    width: 30%;
    float: left;
  }
  .active {
    font-weight: bold;
  }
</style>

