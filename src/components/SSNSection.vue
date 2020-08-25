<template>

<div class="columns is-multiline is-1-mobile is-6-desktop is-8-widescreen is-vcentered is-centered">
    <SSNTile v-for="country in countries"
     :key="country"
     :country="country"
     />

</div>

</template>

<script>
import SSNTile from './SSNTile.vue';

export default {
  name: 'SSNSection',
  components: {
    SSNTile,
  },
  data() {
    const countries = [
      { country: 'sweden', comment: '', copy: 's' },
      { country: 'finland', comment: 'Does not take into account date of birth', copy: 'f' },
      { country: 'estonia', comment: '', copy: 'e' },
      { country: 'latvia', comment: '', copy: 'l' },
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
