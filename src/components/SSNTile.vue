<template>
 <div class="column tile is-parent is-2 has-background-info ml-1 has-text-white">
  <article class="tile is-child">
    <p class="title has-text-white">{{country.country}}</p>
  <div class="content ">
    <p>{{country.state}}</p>
    <p> SSN: {{ssn}}</p>
  </div>
  </article>

</div>

</template>

<script>
import generateSSN from '../services/SSNService';

export default {
  name: 'SSNTile',
  props: ['country'],
  created() {
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        window.addEventListener('keydown', (e) => {
          if (e.key === this.country.copy) {
            navigator.clipboard.writeText(this.ssn);
          }
        });
      }
    });
  },
  computed: {
    sex: {
      get() {
        return this.$store.state.sex;
      },
    },
    dateOfBirth: {
      get() {
        return this.$store.state.dateOfBirth;
      },
    },
    ssn: {
      get() {
        return generateSSN(this.country, this.sex, this.dateOfBirth);
      },
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
