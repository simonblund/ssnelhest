<template>
 <div class="tile is-ancestor">
     <SSNTile v-for="country in countries"
     :key="country"
     :country="country"/>
</div>

</template>

<script>
import { FinnishSSN } from 'finnish-ssn';
import SSNTile from './SSNTile.vue';

export default {
  name: 'SSNSection',
  components: {
    SSNTile,
  },
  data() {
    const countries = [
      { country: 'sweden' },
      { country: 'finland' },
      { country: 'estonia' },
      { country: 'latvia' },
    ];

    return {
      countries,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
