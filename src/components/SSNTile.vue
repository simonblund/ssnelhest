<template>
 <div class="column tile is-parent is-2 has-background-info ml-1 has-text-white">
  <article class="tile is-child">
    <p class="title has-text-white">{{country.country}}</p>
  <div class="content">
    <p> SSN: {{ssn}}</p>
  </div>
  </article>

</div>

</template>

<script>
import generateSSN from '../services/SSNService';

export default {
  name: 'SSNTile',
  props: ['country', 'sex', 'birthdate'],
  computed: {
    ssn: {
      get() {
        return generateSSN(this.country, this.sex, this.birthdate);
      },
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
