<template>

<div class="columns is-multiline is-1-mobile is-6-desktop is-8-widescreen">
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
      { country: 'sweden', state: 'READY' },
      { country: 'finland', state: 'NOT_READY' },
      { country: 'estonia', state: 'READY' },
      { country: 'latvia', state: 'FAIL' },
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
