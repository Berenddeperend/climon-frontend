<template>
  <div>

    
    <table>
      <tr>
        <th v-for="key in keys" :key="key">{{key}}</th>
      </tr>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="key in keys" :key="key">
          {{item[key]}}
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TableData',
  computed: {
    ...mapGetters(['data']),
    keys() {
      if(this.data) {
        return Object.keys(this.data[0]);
      } else {
        return null;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  table {
    border-spacing: 0;

    th {
      text-align: left;
      padding: 10px;
    }

    td {
      text-align: left;
      border-bottom: 1px solid #dedede;
      padding: 10px;
    }
  }
</style>

