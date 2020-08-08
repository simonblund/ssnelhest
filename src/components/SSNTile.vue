<template>
 <div class="tile">
  <p>{{country.country}}</p>
  <p>{{generator.createWithAge(20)}}</p>
</div>

</template>

<script>
export default {
  name: 'SSNTile',
  props: ['country', 'generator'],

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
